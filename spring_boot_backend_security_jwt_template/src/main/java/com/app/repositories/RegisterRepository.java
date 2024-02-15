package com.app.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.history.RevisionRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Register;

@Repository
public interface RegisterRepository extends RevisionRepository<Register, Long, Long> ,  JpaRepository<Register, Long> {
	Optional<Register> findByEmail(String email);
}	
