package com.app.dtos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;

import com.app.entities.Register;
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

public class VehicleDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	@NotBlank(message = "Company name should not be null")
	private String company;
	
	@NotBlank(message = "Model name should not be null")
	private String model;
	
	@NotBlank(message = "RC number should not be null")
	@Size(min = 10, max = 10)
	private String rcNumber;
	
	@Past
	private LocalDate dor;
	
	@NotBlank(message = "Licence should not be null")
	@Size(min = 16, max = 16)
	private String licence;

	@NotBlank(message = "Aadhar number should not be null")
	@Size(min = 12, max = 12)	
	private String aadharNo;
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long driverIdId;
}
