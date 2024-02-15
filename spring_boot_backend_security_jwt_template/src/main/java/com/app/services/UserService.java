package com.app.services;

import java.util.List;

import com.app.dtos.BookingDTO;
import com.app.dtos.PublishRideDTO;
import com.app.dtos.RegisterDTO;
import com.app.dtos.RideSearchDTO;

public interface UserService {
	public List<PublishRideDTO> getAvailableRides();

	public BookingDTO bookARide(Long uid, Long rid, BookingDTO bdto) throws Exception;

	public List<BookingDTO> getAllBookings(Long uid);

	public List<PublishRideDTO> getPublishRidesByCity(RideSearchDTO rsdto) throws Exception;
}
