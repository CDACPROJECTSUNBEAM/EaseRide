package com.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.history.RevisionRepository;

import com.app.entities.Register;
import com.app.entities.Vehicle;

public interface VehicleRepository extends RevisionRepository<Vehicle, Long, Long> ,  JpaRepository<Vehicle, Long>  {
	
	@Query("select v from Vehicle v where v.driverId = :driver and v.company = :carCompany")
	public Vehicle getVehicle(Register driver, String carCompany);
	
	public List<Vehicle> findByDriverId(Register driver);
	
}
