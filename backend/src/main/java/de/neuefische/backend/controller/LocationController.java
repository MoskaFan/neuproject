package de.neuefische.backend.controller;
import de.neuefische.backend.modelle.Location;
import de.neuefische.backend.modelle.LocationDTO;
import de.neuefische.backend.service.LocationService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/locations/")
public class LocationController {
    private final LocationService locationService;


    public LocationController(LocationService locationService) {
        this.locationService = locationService;

    }

    @PostMapping()
    public Location addLocation(@RequestBody LocationDTO locationDTO){



            return locationService.addLocation( locationDTO);


        }


    @GetMapping()
    public List<Location> getLocationList(){
        return locationService.listLocations();
    }
}
