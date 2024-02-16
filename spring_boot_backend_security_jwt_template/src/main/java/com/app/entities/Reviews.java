package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Reviews extends BaseEntity {
	
	@ManyToOne
//	One driver can have multiple reviews of multiple users;
//	U1 - R1 
//			\  D1
//			/ 
//	U2 - R2
	
	@JoinColumn(name = "driver_id")
	private Register driver;
	
	@OneToOne
//	U1 - R1 OK
//	U2 - R2 OK
//	U3 - R3 OK
//	U4 - R2 XXX
	@JoinColumn(name = "user_id")
	private Register user;

	@Column(nullable = false)
	@DecimalMax("5.0") @DecimalMin("0.0") 
	private double rating;
	
	@Column(length = 100, nullable = false)
	private String review;
	
	
}
