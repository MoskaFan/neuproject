package de.neuefische.backend.controller;

import de.neuefische.backend.modelle.Location;
import de.neuefische.backend.modelle.LocationDTO;
import de.neuefische.backend.service.LocationService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/locations")
public class LocationController {
    private final LocationService locationService;


    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }
    @PostMapping("/newlocation")
    public Location addLocation(@RequestBody LocationDTO locationDTO){
        return locationService.addLocation(locationDTO);
    }
}
