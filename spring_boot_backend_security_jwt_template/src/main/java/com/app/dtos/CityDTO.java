package com.app.dtos;

import com.app.entities.State;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class CityDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	private String city;
	
//	Naming Convention --> state == stateId	
	private Long stateId;
	
}
