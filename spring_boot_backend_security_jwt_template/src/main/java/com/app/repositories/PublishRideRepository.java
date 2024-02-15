package com.app.repositories;

import com.app.dtos.RideSearchDTO;
import com.app.entities.Register;
import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.City;
import com.app.entities.PublishRide;
import org.springframework.data.repository.history.RevisionRepository;

import java.util.List;

public interface PublishRideRepository extends RevisionRepository<PublishRide, Long, Long>, JpaRepository<PublishRide, Long> {
	public List<PublishRide> findByStartCityAndEndCity(String startCity, String endCity);
	
	public List<PublishRide> findByVehicleId(Long vId);
	
}
