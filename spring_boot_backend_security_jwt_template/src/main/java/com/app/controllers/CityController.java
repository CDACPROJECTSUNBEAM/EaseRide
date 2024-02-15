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
import com.app.entities.City;
import com.app.services.CityService;

@RestController
@RequestMapping("/api/cities")
@CrossOrigin(origins = "http://localhost:3000")
public class CityController {
	
	@Autowired
	private CityService cityService;
	
	@GetMapping("/")
	public ResponseEntity<List<CityDTO>> getAllCities(){
		return new ResponseEntity<List<CityDTO>>(cityService.getAllCities(), HttpStatus.OK);
	}
	
}
