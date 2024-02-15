package com.app.dao;
import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDate;
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

import com.app.entities.Vehicle;
import com.app.repositories.RegisterRepository;
import com.app.repositories.VehicleRepository;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)	
public class VehicleEntityDaoTest {
	@Autowired
	private VehicleRepository vehicleRepo;
	@Autowired
	private RegisterRepository registerRepo;

//(String company, String model, String rcNumber, LocalDate dor, String licence, String aadharNo,
//	Register driverId)
	
	
	@Test
	void testAddVehicles() {
		List<Vehicle> list = List.of(
				new Vehicle("Honda", "Verna", "123452789", LocalDate.of(2013, 4, 11) , "11111211", "1121111311",registerRepo.findById((long) 3).orElseThrow(null)),
				new Vehicle("Suzuki", "Ertiga", "12345678", LocalDate.of(2013, 4, 11) , "111661111", "1121111111",registerRepo.findById((long)3).orElseThrow(null))
				)
				;
		List<Vehicle> list2 = vehicleRepo.saveAll(list);
		assertEquals(2, list2.size());

	}
	
}


