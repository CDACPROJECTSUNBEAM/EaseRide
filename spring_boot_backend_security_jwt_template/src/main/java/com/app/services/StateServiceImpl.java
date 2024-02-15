package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dtos.RegisterDTO;
import com.app.dtos.StateDTO;
import com.app.repositories.CityRepository;
import com.app.repositories.StateRepository;

@Service
@Transactional
public class StateServiceImpl implements StateService {


	@Autowired
	private StateRepository staterepo;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public List<StateDTO> getAllStates() {
		List<StateDTO> list = staterepo.findAll().stream().map(m -> mapper.map(m, StateDTO.class)).collect(Collectors.toList());
		return list;
	}
	
}
