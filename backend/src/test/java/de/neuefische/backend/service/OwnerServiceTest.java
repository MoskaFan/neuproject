package de.neuefische.backend.service;

import de.neuefische.backend.modelle.Address;
import de.neuefische.backend.modelle.Location;
import de.neuefische.backend.modelle.Owner;
import de.neuefische.backend.repository.LocationRepository;
import de.neuefische.backend.repository.OwnerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.security.core.userdetails.UserDetails;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


class OwnerServiceTest {
    OwnerRepository ownerRepository=mock(OwnerRepository.class);
    LocationRepository locationRepository=mock(LocationRepository.class);
    IDGeneratorService idGeneratorService = mock(IDGeneratorService.class);
    OwnerService ownerService = new OwnerService(ownerRepository,
            locationRepository, idGeneratorService);

    @Test
    void loadUserByUsername() {
        String username = "user";
        String id = idGeneratorService.generateID();
        Owner owner = new Owner(id, username,
                "email","password",
                new ArrayList<>());
        when(ownerRepository.findByUsername(username)).thenReturn(Optional.of(owner));
        UserDetails user = ownerService.loadUserByUsername(username);
        assertEquals(owner.getUsername(), user.getUsername());


    }
    @Test
    void deleteLocationInOwnerDataTest(){
        String username = "user";
        Owner owner = new Owner("10", username,
                "email","password",
                new ArrayList<>(List.of(new Location("140", "name",
                        "image", "description", "website", new BigDecimal("120"),
                        20, "Hochzeit", 50,
                        new Address("Deutschland", "Hamburg", "00000", "Test Street",
                                "12"), null, null))));
        when(ownerRepository.save(owner)).thenReturn(owner);
        when(ownerRepository.findById("10")).thenReturn(Optional.of(owner));
        owner = ownerService.deleteLocationInOwnerData("10", "140");
        assertTrue(owner.getLocations().isEmpty());
    }
}