package com.app.dtos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.app.entities.BaseEntity;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewsDTO extends BaseEntity {

	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
		
	private Long driverId;
	
	private Long userId;

	@NotNull(message = "Rating Should not be Null")
	@DecimalMax("5.0") @DecimalMin("0.0") 
	private double rating;
	
	@NotBlank(message = "Review cannot be empty")
	private String review;
	
}
