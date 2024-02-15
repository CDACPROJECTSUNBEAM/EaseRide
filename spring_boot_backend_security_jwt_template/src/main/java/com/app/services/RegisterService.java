package com.app.services;

import java.util.List;

import com.app.dtos.ProfileUpdateDTO;
import com.app.dtos.RegisterDTO;
import com.app.dtos.SigninDTO;
import com.app.dtos.SigninResDTO;

public interface RegisterService {
	public RegisterDTO signup(RegisterDTO rdto);
	
	public List<RegisterDTO> getAllUsers();
		
	public RegisterDTO updateProfile(Long id, ProfileUpdateDTO rdto);

	public RegisterDTO getUser(Long uId);

	public SigninResDTO getUserByEmail(String email);

}
