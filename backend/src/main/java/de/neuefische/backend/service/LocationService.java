package de.neuefische.backend.service;
import de.neuefische.backend.modelle.Location;
import de.neuefische.backend.repository.LocationRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class LocationService {
    private final LocationRepository locationRepository;

    public LocationService(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    public List<Location> listLocations() {
        return locationRepository.findAll();
    }

    public List<Location> listLocationsByCity(String city) {
        List<Location> newList = new ArrayList<>();
        List<Location> list = locationRepository.findAll();
        if(city != null){
            for(Location location : list){
                if(location.getAddress().getCity().toLowerCase().contains(city.toLowerCase())){
                    newList.add(location);
                }
            }

        }return newList;
    }
}
