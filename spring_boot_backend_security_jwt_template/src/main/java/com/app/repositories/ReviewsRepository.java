package com.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Register;
import com.app.entities.Reviews;

public interface ReviewsRepository extends JpaRepository<Reviews, Long>  {

	@Query("select r from Reviews r where driver = :driver")
	List<Reviews> getAllByDriver(Register driver);

}
