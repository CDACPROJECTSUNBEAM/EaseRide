package com.app.services;

import com.app.dtos.*;

import java.util.List;

public interface DriverService {
	public PublishRideDTO publishRide(Long id, Long vId, PublishRideDTO pdto) throws Exception;
	
	public RegisterDTO getDriverDetails(Long id);
	
	public VehicleDTO addVehicle(Long id, VehicleDTO vDto);
	
	public VehicleDTO getVehicleById(Long dId, Long vId);

	public List<BookingResponseDTO> getAllBookingsByDriverId(Long dId);

	public BookingDTO acceptRide(Long bId);

	public BookingDTO rejectRide(Long bId);

	public List<VehicleDTO> getVehicleDetails(Long dId);
}
