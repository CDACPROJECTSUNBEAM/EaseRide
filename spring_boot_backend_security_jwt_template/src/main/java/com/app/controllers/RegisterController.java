package com.app.controllers;

import java.util.Base64;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.ProfileUpdateDTO;
import com.app.dtos.RegisterDTO;
import com.app.dtos.SigninDTO;
import com.app.dtos.SigninResDTO;
import com.app.security.JwtUtils;
import com.app.services.RegisterService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class RegisterController {
	@Autowired
	private RegisterService rservice;
	
	@Autowired
	private JwtUtils utils;
	
	@Autowired
	private AuthenticationManager mgr;

	@PostMapping("/signup")
	public ResponseEntity<RegisterDTO> signup(@RequestBody RegisterDTO registerdto) {
		System.out.println(registerdto);
		return new ResponseEntity<RegisterDTO>(rservice.signup(registerdto), HttpStatus.CREATED); 
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> signin(@RequestBody SigninDTO signinDto) {
		System.out.println(signinDto);

		Authentication verifiedAuth = mgr.authenticate(new UsernamePasswordAuthenticationToken
				(signinDto.getEmail(), signinDto.getPassword()));
		System.out.println("Verified Auth"+verifiedAuth);
		System.out.println("Hello");
		
		//
		SigninResDTO res = rservice.getUserByEmail(signinDto.getEmail());
		res.setToken(utils.generateJwtToken(verifiedAuth));
		System.out.println(verifiedAuth.getClass());// Custom user details
		return new ResponseEntity<>(res, HttpStatus.FOUND);
		
	}
	
	@GetMapping("/get")
	public ResponseEntity<List<RegisterDTO>> getAllUsers() {
		return new ResponseEntity<List<RegisterDTO>>(rservice.getAllUsers(), HttpStatus.OK);
	}
	
	@GetMapping("/logout")
	public void logout() {
		
	}
	
	@PatchMapping("/updateProfile/{id}")
	public ResponseEntity<RegisterDTO> updateProfile(@PathVariable Long id, @RequestBody ProfileUpdateDTO rdto) {
		return new ResponseEntity<RegisterDTO>(rservice.updateProfile(id, rdto), HttpStatus.OK);
	}

	@GetMapping("/get/user/{uId}")
	public ResponseEntity<RegisterDTO> getUser(@PathVariable Long uId) {
		return new ResponseEntity<RegisterDTO>(rservice.getUser(uId), HttpStatus.OK);
	}
	
	
}
