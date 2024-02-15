package com.app.dao;
import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import com.app.entities.City;
import com.app.entities.PublishRide;
import com.app.entities.Register;
import com.app.entities.State;
import com.app.repositories.CityRepository;
import com.app.repositories.PublishRideRepository;
import com.app.repositories.RegisterRepository;
import com.app.repositories.StateRepository;
import com.app.repositories.VehicleRepository;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)	
public class PublishRideEntityDaoTest {
	

	@Autowired
	private PublishRideRepository publishRideRepo;
	
	@Autowired
	private RegisterRepository registerRepo;
	
	@Autowired
	private VehicleRepository vRepo;
	
	@Test
	void testAddPublishRides() {
		List<PublishRide> list = List.of(
				new PublishRide("Pune", "Mumbai", LocalDate.of(2024, 2, 6), LocalDate.of(2024, 2, 6), LocalTime.of(12, 30, 0), LocalTime.of(20, 0, 0), vRepo.findById((long) 3).orElseThrow(), 5000.0, 5, registerRepo.findById((long) 3).orElseThrow()),
				new PublishRide("Indore", "Jaipur", LocalDate.of(2024, 2, 8), LocalDate.of(2024, 2, 9), LocalTime.of(10, 0, 0), LocalTime.of(11, 30, 0), vRepo.findById((long) 4).orElseThrow(), 12000.0, 7, registerRepo.findById((long) 3).orElseThrow())
				)
				;
		List<PublishRide> list2 = publishRideRepo.saveAll(list);
		assertEquals(2, list2.size());

	}
	
}


