package com.app.dtos;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.Email;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.entities.GenderType;
import com.app.entities.RoleType;
import com.app.entities.Vehicle;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class SigninResDTO {
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	
	@NotBlank(message = "First name should not be null")
	private String fname;

	@NotBlank(message = "Last name should not be null")
	private String lname;
	
	@Email(message = "Email is not valid", regexp = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$")
	@NotBlank(message = "Email cannot be empty")
	private String email;
	
	@NotBlank
	//@Pattern(regexp="((?=.\\d)(?=.[a-z])(?=.[#@$]).{5,20})")
	//@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
	
	@NotBlank
//	1.String is not null
//	2.Trimmed length is greater than zero
	@Size(min = 10, max = 10)
	private String contact;
	
	private GenderType gender;
	
	private RoleType role;
	
	@Past  //reg date must be from Past
	//def date format : yyyy-MM-dd  
	private LocalDate dob;

	private String address;
	
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private LocalDateTime createDate;
    
    private String token;
	 
}
