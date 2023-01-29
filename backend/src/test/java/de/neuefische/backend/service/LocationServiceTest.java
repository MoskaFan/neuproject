package de.neuefische.backend.service;
import de.neuefische.backend.model.Address;
import de.neuefische.backend.model.Location;
import de.neuefische.backend.repository.LocationRepository;
import org.junit.jupiter.api.Test;
import java.math.BigDecimal;
import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import java.time.LocalDate;
import java.time.Month;
import java.util.NoSuchElementException;
import java.util.Optional;

class LocationServiceTest {
    LocationRepository locationRepository=mock(LocationRepository.class);
    LocationService locationService=new LocationService(locationRepository);
    @Test
    void getLocationByID_test() {
        Location location = new Location("140", "name",
                "image", "description", "website", new BigDecimal("120"),
                20, "Hochzeit", 50,
                new Address("Deutschland", "Hamburg", "00000", "Test Street",
                        "12"), LocalDate.of( 2020, Month.APRIL, 8), LocalDate.of( 2020, Month.APRIL, 8));
        when(locationRepository.save(location)).thenReturn(location);
        when(locationRepository.findById("140")).thenReturn(Optional.of(location));
        Location newLocation = locationService.getLocationByID("140");
        assertEquals(location.getId(),  newLocation.getId());


    }
    @Test
     void getLocationByID_negative_test() {

        assertThrows(NoSuchElementException.class, ()->{
            locationService.getLocationByID( "10");
        });


    }

}
