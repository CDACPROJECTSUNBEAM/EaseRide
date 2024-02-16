package com.app.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;

import javax.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.envers.Audited;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@Audited

@Table(name = "booking",
indexes = {@Index(name = "idx_booking",  columnList="id", unique = true)})

public class Booking extends BaseEntity {

	@Enumerated(EnumType.STRING)
	private StatusType status;

	@Column(nullable = false)
	private double price;

	@Column(nullable = false)
	private int noOfSeats;
	
	@OneToOne
//	One user can book one ride at a time
	@JoinColumn(name = "ride_id")
	// further we'll fetch all details of ride
	private PublishRide rideId;
	
//	Logged in user
	@ManyToOne
	@JoinColumn(name = "user_id")
	private Register userId;	
	
	@Column(name = "create_date_time")
	private LocalDateTime createDate;
	
	@Version
    private Long version;
}
