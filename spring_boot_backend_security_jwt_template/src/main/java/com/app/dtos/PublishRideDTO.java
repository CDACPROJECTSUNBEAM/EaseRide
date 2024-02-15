package com.app.dtos;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.app.entities.Register;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.envers.Audited;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Audited
public class PublishRideDTO {

	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	@NotBlank(message = "Start City should not be null")
	private String startCity;
	
	@NotBlank(message = "End City should not be null")
	private String endCity;
	
	@Future
	private LocalDate doj;
	
	@Future
	private LocalDate eoj;
	
	private LocalTime departureTime;
	
	private LocalTime reachingTime;
	
	private Long vehicleId;
	
	
	@NotNull(message = "Price Should not be Null")
	private double price;

	@NotNull(message = "Available Seats Should not be Null")
	private int availableSeats;
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long driverIdId;
	
}
