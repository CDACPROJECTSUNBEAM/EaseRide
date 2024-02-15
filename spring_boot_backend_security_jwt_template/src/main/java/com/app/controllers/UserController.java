package com.app.controllers;

import java.util.List;

import com.app.dtos.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.entities.Vehicle;
import com.app.services.DriverService;
import com.app.services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	@Autowired
	private UserService uService;
	
	@Autowired
	private DriverService dService;
	
	@GetMapping("/availableRides")
	public ResponseEntity<List<PublishRideDTO>> getAvailableRides() {
		return new ResponseEntity<List<PublishRideDTO>>(uService.getAvailableRides(), HttpStatus.OK);
	}
	
	@GetMapping("/getBookings/{uId}")
	public ResponseEntity<?> getAllBookings(@PathVariable Long uId) {
		List<BookingDTO> list = uService.getAllBookings(uId);
		if(list == null){
			return new ResponseEntity<>("Invalid User id..." , HttpStatus.NOT_ACCEPTABLE);
		}

		if(list.size() == 0){
			return new ResponseEntity<>("No Booking found..." , HttpStatus.OK);
		}

		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@PostMapping("/bookRide/{uId}/{rId}")
	public ResponseEntity<?> bookARide(@PathVariable Long uId, @PathVariable Long rId, @RequestBody BookingDTO bdto) {
		try{
			return new ResponseEntity<>(uService.bookARide(uId, rId, bdto), HttpStatus.CREATED);
		}catch(Exception e){
			return new ResponseEntity<>("Invalid number of seats...", HttpStatus.NOT_ACCEPTABLE);
		}
	}
	
	@GetMapping("/vehicleDetails/{dId}/{car}")
	public ResponseEntity<VehicleDTO> getVehicleByDriverIdAndCarName(@PathVariable Long dId, @PathVariable String car){
		System.out.println(dId);
		System.out.println(car);
		return new ResponseEntity<VehicleDTO>(dService.getVehicleByName(dId, car), HttpStatus.OK);
	}

	@PostMapping("/getRidesByCity")
	public ResponseEntity<?> getRidesByStartAndEndCity(@RequestBody RideSearchDTO rsdto){
		try{
			List<PublishRideDTO> list = uService.getPublishRidesByCity(rsdto);

			if(list.size() == 0){
				return new ResponseEntity<>("No Rides Available..." , HttpStatus.OK);
			}

			return new ResponseEntity<>(list , HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(e.getMessage() , HttpStatus.NOT_ACCEPTABLE);
		}
	}
	
}
