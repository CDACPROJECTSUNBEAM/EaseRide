package com.app.controllers;

import com.app.dtos.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.services.DriverService;
import com.app.services.ReviewsService;

import java.util.List;

@RestController
@RequestMapping("/api/drivers")
@CrossOrigin(origins = "http://localhost:3000")
public class DriverController {
	
	@Autowired
	private DriverService dService;
	
	
	@Autowired
	private ReviewsService rService;
	
	@PostMapping("/addVehicle/{dId}")
	public ResponseEntity<VehicleDTO> addVehicle(@PathVariable Long dId, @RequestBody VehicleDTO vdto) {
		return new ResponseEntity<VehicleDTO>(dService.addVehicle(dId, vdto), HttpStatus.CREATED);
	}
		
	@PostMapping("/publishRide/{dId}/{vId}")
	public ResponseEntity<PublishRideDTO> publishRide(@PathVariable Long dId, @PathVariable Long vId, @RequestBody PublishRideDTO pdto ) throws Exception {
		
		return new ResponseEntity<PublishRideDTO>(dService.publishRide(dId,vId, pdto), HttpStatus.CREATED);
	}
	
	@GetMapping("/driver/{dId}")
	public ResponseEntity<RegisterDTO> getDriverDetails(@PathVariable Long dId){
		return new ResponseEntity<RegisterDTO>(dService.getDriverDetails(dId), HttpStatus.OK);
	}
	
//	@GetMapping("/rideRequests/{dId}")
//	public ResponseEntity<?> getRideRequests(@PathVariable Long dId) {
//		List<BookingDTO> list = dService.getAllBookingsByDriverId(dId);
//
//		if(list.isEmpty()){
//			return new ResponseEntity<>("No Ride Requested...", HttpStatus.OK);
//		}
//
//		return new ResponseEntity<>(list, HttpStatus.OK);
//	}
	
	
	
	@PutMapping("/acceptRide/{bId}")
	public ResponseEntity<BookingDTO> acceptRide(@PathVariable Long bId) {
		return new ResponseEntity<>(dService.acceptRide(bId), HttpStatus.OK);
	}
	
	@PutMapping("/rejectRide/{bId}")
	public ResponseEntity<BookingDTO> rejectRide(@PathVariable Long bId) {
		return new ResponseEntity<>(dService.rejectRide(bId), HttpStatus.OK);
	}

	@GetMapping("/vehicle/{dId}")
	public ResponseEntity<?> getAllVehicles(@PathVariable Long dId){
		return new ResponseEntity<>(dService.getVehicleDetails(dId), HttpStatus.OK);
	}
	
	@GetMapping("/review/{dId}")
	public ResponseEntity<?> getAllReviews(@PathVariable Long dId){	
		return new ResponseEntity<>(dService.getAllReviewsByDriverId(dId), HttpStatus.OK);
	}
	
	@GetMapping("/avgReview/{dId}")
	public ResponseEntity<?> getAllReviewss(@PathVariable Long dId){	
		return new ResponseEntity<>(dService.getAvgRating(dId), HttpStatus.OK);
	}
	
}