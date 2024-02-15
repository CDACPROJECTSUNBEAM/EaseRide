package com.app.services;

import com.app.dtos.*;

import java.util.List;

public interface AdminService {
    public List<RegisterDTO> getAllUsers();
    public List<RegisterDTO> getAllDrivers();

    public List<BookingDTO> getAllBookings();
    public List<PublishRideDTO> getAllRides();
    public List<CityDTO> getAllCities();
    public StateDTO addState(StateDTO sdto);
    public CityDTO addCity(CityDTO cdto);

    public double getRevenue(); 
    
    public CountDTO countCity();
    public CountDTO countState();
}
