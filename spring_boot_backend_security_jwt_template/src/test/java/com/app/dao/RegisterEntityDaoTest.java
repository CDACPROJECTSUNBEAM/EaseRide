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
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.annotation.Rollback;

import com.app.entities.GenderType;
import com.app.entities.Register;
import com.app.entities.RoleType;
import com.app.repositories.RegisterRepository;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)	
public class RegisterEntityDaoTest {
	@Autowired
	private RegisterRepository registerRepo;


	
	
	@Test
	void testAddUsers() {
		List<Register> list = List.of(
				new Register("Amar", "Madhekar", "Amar@gmail.com", "Amar@1234" , "9834961559", GenderType.MALE,  RoleType.ROLE_ADMIN, LocalDate.of(2001, 3, 13), ""),
				new Register("Yash", "Bhosale", "Yash@gmail.com", "Yash@1234" , "9834961559", GenderType.MALE,  RoleType.ROLE_DRIVER, LocalDate.of(2001, 10, 7), "Ravet"),
				new Register("Akshat", "Shah", "Akshat@gmail.com", "Akshat@1234" , "9834961559", GenderType.MALE,  RoleType.ROLE_USER, LocalDate.of(2001, 1, 12), "TCG, Hinjewadi"),
				new Register("Pratik", "Bhosale", "Pratik@gmail.com", "Pratik@1234" , "9834961559", GenderType.MALE,  RoleType.ROLE_USER, LocalDate.of(2001, 1, 12), "Sangli"));
		List<Register> list2 = registerRepo.saveAll(list);
		assertEquals(4, list2.size());

	}
	
}


