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

import com.app.entities.State;
import com.app.repositories.StateRepository;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)	
public class StateEntityDaoTest {
	

	@Autowired
	private StateRepository stateRepo;
	
	
	@Test
	void testAddStates() {
		List<State> list = List.of(
				new State("Maharashtra"),
				new State("Madhya Pradesh"),
				new State("Gujarat"),
				new State("Rajasthan"),
				new State("Uttar Pradesh")
				)
				;
		List<State> list2 = stateRepo.saveAll(list);
		assertEquals(5, list2.size());

	}
	
}


