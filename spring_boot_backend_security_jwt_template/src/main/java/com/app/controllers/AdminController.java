package com.app.controllers;

import com.app.dtos.CityDTO;
import com.app.dtos.StateDTO;
import com.app.dtos.VehicleDTO;
import com.app.services.AdminService;
import com.app.services.RegisterService;
import com.app.services.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private VehicleService vService;

    @Autowired
    private RegisterService rService;

    @Autowired
    private AdminService aService;



    @GetMapping("/vehicles")
    public ResponseEntity<List<VehicleDTO>> getAllVehicles(){
        return new ResponseEntity<List<VehicleDTO>>(vService.getAllVehicles(), HttpStatus.OK);
    }

    @GetMapping("/users")
    public ResponseEntity<?> getAllUsers(){
        return new ResponseEntity<>(aService.getAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/drivers")
    public ResponseEntity<?> getAllDrivers(){
        return new ResponseEntity<>(aService.getAllDrivers(), HttpStatus.OK);
    }

    @GetMapping("/bookings")
    public ResponseEntity<?> getAllBookings(){
        return new ResponseEntity<>(aService.getAllBookings(), HttpStatus.OK);

    }
    @GetMapping("/rides")
    public ResponseEntity<?> getAllRides(){
        return new ResponseEntity<>(aService.getAllRides(), HttpStatus.OK);

    }

    @GetMapping("/cities")
    public ResponseEntity<?> getAllCities(){
        return new ResponseEntity<>(aService.getAllCities(), HttpStatus.OK);

    }

    @PostMapping("/add/state")
    public ResponseEntity<?> addState(@RequestBody StateDTO sdto){
        return new ResponseEntity<>(aService.addState(sdto), HttpStatus.OK);
    }

    @PostMapping("/add/city")
    public ResponseEntity<?> addCity(@RequestBody CityDTO cdto){
        return new ResponseEntity<>(aService.addCity(cdto), HttpStatus.OK);
    }
    
    @GetMapping("/revenue")
    public ResponseEntity<?> getRevenue(){
    	return new ResponseEntity<>(aService.getRevenue(), HttpStatus.OK);
    }
    
    @GetMapping("/city/count")
    public ResponseEntity<?> countCity(){
        return new ResponseEntity<>(aService.countCity(), HttpStatus.OK);
    }

    @GetMapping("/state/count")
    public ResponseEntity<?> countState(){
        return new ResponseEntity<>(aService.countState(), HttpStatus.OK);
    }
    


}
