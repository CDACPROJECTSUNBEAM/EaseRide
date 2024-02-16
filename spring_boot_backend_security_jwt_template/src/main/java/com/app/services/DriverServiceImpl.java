package com.app.services;

import javax.transaction.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dtos.*;
import com.app.entities.*;
import com.app.repositories.BookingRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.repositories.PublishRideRepository;
import com.app.repositories.RegisterRepository;
import com.app.repositories.ReviewsRepository;
import com.app.repositories.VehicleRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {
	
	@Autowired
	private RegisterRepository driverRepo;
	
	@Autowired
	private PublishRideRepository publishRepo;

	@Autowired
	private BookingRepository bRepo;


	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private RegisterRepository registerRepo;
	
	@Autowired
	private VehicleRepository vRepo;
	
	@Autowired
	private ReviewsRepository reviewRepo;

	@Override
	public PublishRideDTO publishRide(Long id, Long vId, PublishRideDTO pdto) throws Exception {
		Register driver = driverRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Record Not Found!"));
		Vehicle vehicle = vRepo.findById(vId).orElseThrow(()-> new ResourceNotFoundException("Record Not Found!"));
	
		
	 	List<PublishRide> list =  publishRepo.findByVehicleId(vId);
		if(!list.isEmpty()) {
			for(int i=0;i<list.size();i++) {
				LocalTime dTime= list.get(i).getDepartureTime();
				LocalTime rTime= list.get(i).getReachingTime();
				LocalDate doj =  list.get(i).getDoj();
				LocalDate eoj =  list.get(i).getEoj();
				
				if(pdto.getDepartureTime().isAfter(dTime) &&  pdto.getDepartureTime().isBefore(rTime) && pdto.getDepartureTime().equals(dTime)){
					throw new Exception("Vehicle with this time interval already exists");
				}
			}
		}
	 	
		if(driver != null) {
			PublishRide pRide = mapper.map(pdto, PublishRide.class);
			pRide.setDriverId(driver);
			pRide.setVehicle(vehicle);
			publishRepo.save(pRide);
			return mapper.map(pRide, PublishRideDTO.class);
		}
		
		return null;
	}
	
	@Override
	public RegisterDTO getDriverDetails(Long id) {
		Register driverEntity = registerRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Record Not Found!"));
		if(driverEntity.getRole().compareTo(RoleType.ROLE_DRIVER)==0) {
			return mapper.map(driverEntity, RegisterDTO.class);			
		}
		else {
			return null;
		}
	}

	@Override
	public VehicleDTO addVehicle(Long id, VehicleDTO vDto) {
		Register driverEntity = registerRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Record Not Found!"));
		Vehicle vehicleEntity = mapper.map(vDto, Vehicle.class);
		vehicleEntity.setDriverId(driverEntity);
		vRepo.save(vehicleEntity);
		return mapper.map(vehicleEntity, VehicleDTO.class);
	}

	@Override
	public VehicleDTO getVehicleById(Long dId, Long vId) {
		Register driverEntity = registerRepo.findById(dId).orElseThrow(()-> new ResourceNotFoundException("Record Not Found!"));
		Vehicle vehicle = vRepo.findById(vId).orElseThrow(()-> new ResourceNotFoundException("Record Not Found!"));
		return mapper.map(vehicle, VehicleDTO.class);
	}

	@Override
	public List<BookingResponseDTO> getAllBookingsByDriverId(Long dId) {
//		List<Booking> bookings = bRepo.findAll();
//		List<Booking> bookingReq = new ArrayList<>();
//
//		for(int i=0; i<bookings.size(); i++){
//			Long driverId = bookings.get(i).getRideId().getDriverId().getId();
//			if(Long.compare(driverId, dId) == 0){
//				bookingReq.add(bookings.get(i));
//			}
//		}
//
//		List<BookingDTO> list = bookingReq.stream().map(m -> mapper.map(m, BookingDTO.class)).collect(Collectors.toList());
//
//		//fetch specific user details by userid in above list : Todo
//		List<Register> users = new ArrayList<>();
//		for(int i=0; i<bookingReq.size(); i++){
//			Register user = registerRepo.findById(bookingReq.get(i).getUserId().getId()).orElseThrow();
//			users.add(user);
//		}
//
//		List<RegisterDTO> userList = users.stream().map(m -> mapper.map(m, RegisterDTO.class)).collect(Collectors.toList());
//
//		//fetch specific ride details by rideid in above list : Todo
//		List<PublishRide> rides = new ArrayList<>();
//		for(int i=0; i<bookingReq.size(); i++){
//			PublishRide ride = publishRepo.findById(bookingReq.get(i).getRideId().getId()).orElseThrow();
//			rides.add(ride);
//		}
//
//		List<PublishRideDTO> rideList = rides.stream().map(m -> mapper.map(m, PublishRideDTO.class)).collect(Collectors.toList());
//
//		List<BookingResponseDTO> resList = new ArrayList<>();
//		for(int i=0; i<list.size(); i++){
//			BookingDTO bdto = list.get(i);
//
//			for(int j=0; j<userList.size(); j++){
//				if(bdto.getUserIdId().compareTo(userList.get(j).getId()) == 0){
//
//				}
//			}
//
//			for(int k=0; k<rideList.size(); k++){
//
//			}
//		}

		List<Booking> bookings = bRepo.findAll();
		List<BookingResponseDTO> bookingReq = new ArrayList<>();

		for(int i=0; i<bookings.size(); i++){
			Long driverId = bookings.get(i).getRideId().getDriverId().getId();
			if(Long.compare(driverId, dId) == 0){
				BookingResponseDTO brdto = new BookingResponseDTO();
				brdto.setNoOfSeats(bookings.get(i).getNoOfSeats());
				brdto.setPrice(bookings.get(i).getPrice());
			}
		}

		return null;
	}

	@Override
	public BookingDTO acceptRide(Long bId) {
		Booking booking = bRepo.findById(bId).orElseThrow(()-> new ResourceNotFoundException("Record Not Found!"));
		booking.setStatus(StatusType.ACCEPTED);
		return mapper.map(bRepo.save(booking), BookingDTO.class);
	}

	@Override
	public BookingDTO rejectRide(Long bId) {
		Booking booking = bRepo.findById(bId).orElseThrow(()-> new ResourceNotFoundException("Record Not Found!"));
		booking.setStatus(StatusType.REJECTED);
		return mapper.map(bRepo.save(booking), BookingDTO.class);
	}
	
	@Override
	public List<VehicleDTO> getVehicleDetails(Long dId) {
		Register driver = registerRepo.findById(dId).orElseThrow();
		List<VehicleDTO> vehicles = vRepo.findByDriverId(driver).stream().map(m -> mapper.map(m, VehicleDTO.class)).collect(Collectors.toList());
		return vehicles;
	}

	@Override
	public List<ReviewsDTO> getAllReviewsByDriverId(Long dId) {
		List<ReviewsDTO> list = new ArrayList<ReviewsDTO>() ;
		List<Reviews> list1 = new ArrayList<Reviews>() ;
		Register driver = registerRepo.findById(dId).orElseThrow(()-> new ResourceNotFoundException("Driver Not Found"));
		if(driver.getRole().compareTo(RoleType.ROLE_DRIVER)==0) {
			list1= reviewRepo.getAllByDriver(driver);
		}
		list = list1.stream().map(m -> mapper.map(m, ReviewsDTO.class)).collect(Collectors.toList());
		return list;
	}

	@Override
	public double getAvgRating(Long dId) {
		double avg = 0.0;
		double ans = 0;
		List<ReviewsDTO> list = getAllReviewsByDriverId(dId);
		for(int i=0;i<list.size();i++) {
			avg += list.get(i).getRating();
		}
		if(avg!=0.0) {
			ans = avg/list.size();
		}
		return ans;
	}

}
