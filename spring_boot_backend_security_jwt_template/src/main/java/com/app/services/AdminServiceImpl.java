package com.app.services;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dtos.*;
import com.app.entities.*;
import com.app.repositories.*;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional

public class AdminServiceImpl implements AdminService {
    @Autowired
    private RegisterRepository rRepo;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private BookingRepository bRepo;

    @Autowired
    private PublishRideRepository pRepo;

    @Autowired
    private StateRepository sRepo;

    @Autowired
    private CityRepository cRepo;

    @Override
    public List<RegisterDTO> getAllUsers() {
        List<Register> list = rRepo.findAll();
        List<Register> user = new ArrayList<>();
        for(int i=0;i<list.size();i++){
            if(list.get(i).getRole().compareTo(RoleType.ROLE_USER) == 0){
                user.add(list.get(i));
            }

        }
        List<RegisterDTO> users = user.stream().map(m -> mapper.map(m, RegisterDTO.class)).collect(Collectors.toList());

        return users;
    }

    @Override
    public List<RegisterDTO> getAllDrivers() {
        List<Register> list = rRepo.findAll();
        List<Register> driver = new ArrayList<>();
        for(int i=0;i<list.size();i++){
            if(list.get(i).getRole().compareTo(RoleType.ROLE_DRIVER) == 0){
                driver.add(list.get(i));
            }

        }
        List<RegisterDTO> drivers = driver.stream().map(m -> mapper.map(m, RegisterDTO.class)).collect(Collectors.toList());

        return drivers;
    }

    @Override
    public List<BookingDTO> getAllBookings() {
        List<Booking> booking = bRepo.findAll();
        List<BookingDTO> bookings = booking.stream().map(m -> mapper.map(m, BookingDTO.class)).collect(Collectors.toList());
        return bookings;
    }

    @Override
    public List<PublishRideDTO> getAllRides() {
        List<PublishRide> ride = pRepo.findAll();
        List<PublishRideDTO> rides = ride.stream().map(m -> mapper.map(m, PublishRideDTO.class)).collect(Collectors.toList());
        return rides;
    }

    @Override
    public List<CityDTO> getAllCities() {
        List<City> city = cRepo.findAll();
        List<CityDTO> cities = city.stream().map(m -> mapper.map(m, CityDTO.class)).collect(Collectors.toList());
        return cities;
    }

    @Override
    public StateDTO addState(StateDTO sdto) {
        State state = mapper.map(sdto, State.class);
        return mapper.map(sRepo.save(state), StateDTO.class);
    }

    @Override
    public CityDTO addCity(CityDTO cdto) {
        City city = mapper.map(cdto, City.class);
        Long id = cdto.getStateId();
        State state = sRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Record Not Found!"));
        city.setState(state);
        return mapper.map(cRepo.save(city), CityDTO.class);
    }

	@Override
	public double getRevenue() {
		double revenue = 0.0;
		List<Booking> list = bRepo.findAll();
		for(int i=0;i<list.size();i++) {
			if(list.get(i).getStatus().compareTo(StatusType.ACCEPTED)==0) {
				revenue += list.get(i).getPrice();
			}
		}
		return revenue;
	}
	
	@Override
    public CountDTO countCity() {
        List<City> city = cRepo.findAll();
        CountDTO cdto = new CountDTO();
        cdto.setCount(city.size());
        return cdto;
    }

    @Override
    public CountDTO countState() {
        List<State> states = sRepo.findAll();
        CountDTO cdto = new CountDTO();
        cdto.setCount(states.size());
        return cdto;
    }
}
