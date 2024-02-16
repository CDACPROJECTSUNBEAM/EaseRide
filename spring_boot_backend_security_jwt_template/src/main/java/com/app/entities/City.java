package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class City extends BaseEntity{
	
	@Column(length = 30, nullable = false)
	private String city;

	@ManyToOne //Many Cities belong to single state
	@JoinColumn(name = "state_id")
	private State state;

	public City(String city, State state) {
		this.city = city;
		this.state = state;
	}
//	
	
	
	
}
