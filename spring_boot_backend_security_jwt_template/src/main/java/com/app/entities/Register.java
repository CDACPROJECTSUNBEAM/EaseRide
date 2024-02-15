package com.app.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

import org.hibernate.envers.Audited;
import org.springframework.data.annotation.CreatedDate;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Audited
public class Register extends BaseEntity {
	
	@Column(name = "first_name", length = 45,  nullable = false)
	private String fname;
	
	@Column(name = "last_name", length = 45, nullable = false)
	private String lname;
	
	
	@Column(name = "email", length = 45,  nullable = false)
	private String email;
	
	@Column(name = "password", length = 200, nullable = false)
	private String password;
	
	
	@Column(name = "contact", length = 10 , nullable = false)
	private String contact;
	
	@Enumerated(EnumType.STRING)
	private GenderType gender;
	
	@Enumerated(EnumType.STRING)
	private RoleType role;
	
	private LocalDate dob;

	@Column(name = "address", length = 100)
	private String address;
	
	
	@Column(name = "create_date_time")
	private LocalDateTime createDate;
	
	
	
	
	
	@OneToMany(mappedBy = "driverId", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
	List<Vehicle> vehicles = new ArrayList<Vehicle>();
	
	
	public void addVehicle(Vehicle v) {
		this.vehicles.add(v);// can navigate from parent --> child
		v.setDriverId(this);// can navigate from child --> parent
	}

	// helper method : to remove vehicle
	public void removeVehicle(Vehicle v) {
		this.vehicles.remove(v);
		v.setDriverId(null);
	}

	public Register(String fname, String lname, String email, String password, String contact, GenderType gender,
			RoleType role, LocalDate dob, String address) {
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.password = password;
		this.contact = contact;
		this.gender = gender;
		this.role = role;
		this.dob = dob;
		this.address = address;
	}


	
}
