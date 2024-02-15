package com.app.services;

import com.app.dtos.VehicleDTO;
import com.app.repositories.VehicleRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {
    @Autowired
    private ModelMapper mapper;

    @Autowired
    private VehicleRepository vRepo;

    @Override
    public List<VehicleDTO> getAllVehicles() {
        List<VehicleDTO> list = vRepo.findAll().stream().map(m -> mapper.map(m, VehicleDTO.class)).collect(Collectors.toList());
        return list;
    }
}
