package com.app.repositories;

import com.app.entities.Booking;
import com.app.entities.City;
import com.app.entities.Register;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.history.RevisionRepository;

import java.util.List;

public interface BookingRepository extends RevisionRepository<Booking, Long, Long>, JpaRepository<Booking, Long> {
    public List<Booking> findByUserId(Register user);
}
