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

import com.app.entities.City;
import com.app.entities.State;
import com.app.repositories.CityRepository;
import com.app.repositories.StateRepository;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)	
public class CityEntityDaoTest {
	

	@Autowired
	private CityRepository cityRepo;
	
	@Autowired
	private StateRepository stateRepo;
	
	
	@Test
	void testAddCities() {
		List<City> list = List.of(
				new City("Pune", stateRepo.findById((long) 1).orElseThrow()),
				new City("Mumbai", stateRepo.findById((long) 1).orElseThrow()),
				new City("Indore", stateRepo.findById((long) 2).orElseThrow()),
				new City("Jaipur", stateRepo.findById((long) 4).orElseThrow()),
				new City("Varanasi", stateRepo.findById((long) 5).orElseThrow()),
				new City("SolaPur", stateRepo.findById((long) 1).orElseThrow())
				)
				;
		List<City> list2 = cityRepo.saveAll(list);
		assertEquals(6, list2.size());

	}
	
}


