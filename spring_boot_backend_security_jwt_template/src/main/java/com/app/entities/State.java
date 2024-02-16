package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString

public class State extends BaseEntity{
	
	@Column(length = 40, nullable = false)
	private String state;
	
	@OneToMany(mappedBy = "state" , cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
	List<City> cities = new ArrayList<City>();
	
	
	
	public void addCity(City c) {
		this.cities.add(c);// can navigate from parent --> child
		c.setState(this);// can navigate from child --> parent
	}

	// helper method : to remove city
	public void removeCity(City c) {
		this.cities.remove(c);
		c.setState(null);
	}

	public State(String state) {
		this.state = state;
	}
	
}
