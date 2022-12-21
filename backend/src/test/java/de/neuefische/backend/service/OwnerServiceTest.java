package de.neuefische.backend.service;

import de.neuefische.backend.modelle.Owner;
import de.neuefische.backend.modelle.OwnerDTO;
import de.neuefische.backend.repository.OwnerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.test.annotation.DirtiesContext;


import java.util.ArrayList;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;


class OwnerServiceTest {
    OwnerRepository ownerRepository = mock(OwnerRepository.class);
    IDGenerator idGenerator = mock(IDGenerator.class);
    OwnerService ownerService = new OwnerService(ownerRepository,idGenerator);

    @DirtiesContext
    @Test
    void addOwner() {
    OwnerDTO owner = new OwnerDTO( "name", "test@test.com", "12345", new ArrayList<>());
    String id = idGenerator.generateID();
    String password = new Argon2PasswordEncoder().encode(owner.password());
    Owner newOwner = new Owner(id, owner.username(), owner.email(),
            password,owner.locationIds());
    when(ownerRepository.save(newOwner)).thenReturn(newOwner);
    Owner result = ownerService.addOwner(owner);
    assertEquals(result.getUsername(), owner.username());
    }
}