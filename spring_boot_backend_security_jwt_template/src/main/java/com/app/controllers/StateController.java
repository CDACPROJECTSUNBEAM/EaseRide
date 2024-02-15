package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.CityDTO;
import com.app.dtos.StateDTO;
import com.app.services.RegisterService;
import com.app.services.StateService;

@RestController
@RequestMapping("/api/states")
@CrossOrigin(origins = "http://localhost:3000")
public class StateController {
	@Autowired
	private StateService stateService;
	
	@GetMapping("/")
	public ResponseEntity<List<StateDTO>> getAllStates(){
		return new ResponseEntity<List<StateDTO>>(stateService.getAllStates(), HttpStatus.OK);
	
	}
	
}
