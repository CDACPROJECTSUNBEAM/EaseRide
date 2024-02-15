package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dtos.CityDTO;
import com.app.repositories.CityRepository;
import com.app.repositories.StateRepository;

@Service
@Transactional
public class CityServiceImpl implements CityService {
	
	@Autowired
	private CityRepository cityRepo;
	
	@Autowired
	private StateRepository stateRepo;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public List<CityDTO> getAllCities() {
		List<CityDTO> cities = cityRepo.findAll().stream().map(m -> mapper.map(m, CityDTO.class)).collect(Collectors.toList());
		System.out.println(cities);
		return cities;
	}
	
}
