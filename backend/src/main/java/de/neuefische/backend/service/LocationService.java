package de.neuefische.backend.service;
import de.neuefische.backend.modelle.Location;
import de.neuefische.backend.repository.LocationRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class LocationService {
    private final LocationRepository locationRepository;

    public LocationService(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    public List<Location> listLocations() {
        return locationRepository.findAll();
    }


    public Location getLocationByID(String id) {
        return locationRepository.findById(id).orElseThrow(() 
                -> new NoSuchElementException("Die Location wurde nicht gefunden"));
    }
}
