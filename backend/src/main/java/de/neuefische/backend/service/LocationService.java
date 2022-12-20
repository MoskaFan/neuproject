package de.neuefische.backend.service;

import de.neuefische.backend.modelle.Location;
import de.neuefische.backend.modelle.LocationDTO;

import de.neuefische.backend.repository.LocationRepository;
import org.springframework.stereotype.Service;

@Service
public class LocationService {

    private final LocationRepository locationRepository;
    private final IDGenerator idGenerator;

    public LocationService(LocationRepository locationRepository, IDGenerator idGenerator) {
        this.locationRepository = locationRepository;
        this.idGenerator = idGenerator;
    }
    public Location addLocation(LocationDTO location){
        String id = idGenerator.generateID();

        Location newLocation = new Location(id, location.name(),
                location.image(), location.description(),
                location.website(),
                location.pricePerPerson(), location.size(),
                location.eventType(), location.maxCapacity(),
                location.address(), location.startDate(),
                location.endDate());

        return locationRepository.save(newLocation);
    }
}
