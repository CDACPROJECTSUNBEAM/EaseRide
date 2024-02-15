package com.app.services;

import java.time.LocalDateTime;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dtos.ProfileUpdateDTO;
import com.app.dtos.RegisterDTO;
import com.app.dtos.SigninDTO;
import com.app.dtos.SigninResDTO;
import com.app.entities.Register;
import com.app.repositories.RegisterRepository;

@Service
@Transactional
public class RegisterServiceImpl implements RegisterService {

	@Autowired
	private RegisterRepository rdao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Override
	public RegisterDTO signup(RegisterDTO rdto) {
		Register register =  mapper.map(rdto, Register.class);
		String encodedPassword = encoder.encode(register.getPassword());
		register.setPassword(encodedPassword);
		register.setCreateDate(LocalDateTime.now());
		rdao.save(register);
		return mapper.map(register, RegisterDTO.class);
	}

	@Override
	public List<RegisterDTO> getAllUsers() {
	
		List<RegisterDTO> list = rdao.findAll().stream().map(m -> mapper.map(m, RegisterDTO.class)).collect(Collectors.toList());
		
		return list;
	}

//	@Override
//	public RegisterDTO signin(SigninDTO sdto) {
//
//		String encodedEmail = Base64.getEncoder().encodeToString(sdto.getEmail().getBytes());
//		String encodedPassword = Base64.getEncoder().encodeToString(sdto.getPassword().getBytes());
//		sdto.setEmail(encodedEmail);
//		sdto.setPassword(encodedPassword);
//
//		Register register = rdao.findByEmail(sdto.getEmail()).get();
//
//		System.out.println("Name - " + register.getFname());
//
//		if(register != null){
//			if(register.getPassword().equals(sdto.getPassword())){
//				return mapper.map(register, RegisterDTO.class);
//			}
//		}
//
//		return null;
//	}

	
	@Override
	public RegisterDTO updateProfile(Long id, ProfileUpdateDTO rdto) {
		Register register = rdao.findById(id).orElseThrow(null);
		register.setFname(rdto.getFname());
		register.setLname(rdto.getLname());
		register.setEmail(rdto.getEmail());
		register.setContact(rdto.getContact());
		register.setDob(rdto.getDob());
		register.setGender(rdto.getGender());
		register.setAddress(rdto.getAddress());
		rdao.save(register);
		RegisterDTO registerDto = mapper.map(register, RegisterDTO.class);
		return registerDto;
	}

	@Override
	public RegisterDTO getUser(Long uId) {
		Register user = rdao.findById(uId).orElseThrow();
		return mapper.map(user, RegisterDTO.class);
	}

	@Override
	public SigninResDTO getUserByEmail(String email) {
		Register user = rdao.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("User not found!!"));		
		return mapper.map(user, SigninResDTO.class);
	}
	
	
	
}
