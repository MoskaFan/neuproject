package de.neuefische.backend.service;

import de.neuefische.backend.modelle.Owner;
import de.neuefische.backend.repository.LocationRepository;
import de.neuefische.backend.repository.OwnerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
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
}