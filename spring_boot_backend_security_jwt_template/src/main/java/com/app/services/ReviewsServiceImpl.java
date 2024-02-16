package com.app.services;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dtos.ReviewsDTO;
import com.app.entities.Register;
import com.app.entities.Reviews;
import com.app.repositories.RegisterRepository;
import com.app.repositories.ReviewsRepository;

@Service
@Transactional

public class ReviewsServiceImpl implements ReviewsService {
	
	@Autowired
	RegisterRepository rRepo;
	
	@Autowired
	ModelMapper mapper;
	
	@Autowired
	ReviewsRepository reviewRepo;
	
	
	public ReviewsDTO addReviewByUser(Long dId, Long uId, ReviewsDTO rdto) {		
		Reviews review = mapper.map(rdto, Reviews.class);
		Register driver = rRepo.findById(dId).orElseThrow( ()-> new ResourceNotFoundException("Driver Not Found"));
		Register user = rRepo.findById(uId).orElseThrow( ()-> new ResourceNotFoundException("Driver Not Found"));
		if(driver!=null && user!=null) {
			review.setDriver(driver);
			review.setUser(user);
		}
		return mapper.map(reviewRepo.save(review), ReviewsDTO.class);
	}	
}
