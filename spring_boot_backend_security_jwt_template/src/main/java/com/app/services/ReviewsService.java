package com.app.services;

import com.app.dtos.ReviewsDTO;

public interface ReviewsService {
	public ReviewsDTO addReviewByUser(Long dId, Long uId, ReviewsDTO rdto); 
}
