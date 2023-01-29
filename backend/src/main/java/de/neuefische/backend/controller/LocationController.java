package de.neuefische.backend.controller;
import de.neuefische.backend.model.Location;
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

    @GetMapping()
    public List<Location> getLocationList(){
        return locationService.listLocations();
    }

    @GetMapping("/{id}")
    public Location getLocationByID(@PathVariable String id){
        return locationService.getLocationByID(id);
    }


}
