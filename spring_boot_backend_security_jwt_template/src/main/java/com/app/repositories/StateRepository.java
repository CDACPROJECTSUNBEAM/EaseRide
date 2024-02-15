package com.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.dtos.CityDTO;
import com.app.dtos.StateDTO;
import com.app.entities.State;

public interface StateRepository extends JpaRepository<State, Long> {
	@Override
	List<State> findAll();
	
	public State findByState(String stateName);
}
