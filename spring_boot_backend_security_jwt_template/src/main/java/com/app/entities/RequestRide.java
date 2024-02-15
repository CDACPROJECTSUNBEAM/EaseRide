//package com.app.entities;
//
//import java.time.LocalDate;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.JoinColumn;
//import javax.persistence.OneToOne;
//
//@Entity
//public class RequestRide extends BaseEntity {
//	@Column(name = "start_location", length = 40)
//	private String startLocation;
//	
//	@Column(name = "end_location", length = 40)
//	private String endLocation;
//	
//	@Column(name = "date_of_journey")
//	private LocalDate doj;
//	
//	@Column(name = "total_person")
//	private int totalPerson;
//	
////	FK --> user-id
////	One to One
//	@OneToOne
//	@JoinColumn(name = "user_id")
//	private Register userId;
//}
