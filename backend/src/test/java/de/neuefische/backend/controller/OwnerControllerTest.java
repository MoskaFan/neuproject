package de.neuefische.backend.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import de.neuefische.backend.modelle.Owner;
import de.neuefische.backend.repository.OwnerRepository;
import de.neuefische.backend.service.IDGenerator;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
class OwnerControllerTest {
    @Autowired
    MockMvc mockMvc;
    @Autowired
    IDGenerator idGenerator;
    @Autowired
    OwnerRepository ownerRepository;

    @Test
    @DirtiesContext
    void addOwner() throws Exception {
        Owner owner = new Owner("155", "name", "test@test.com", "12345", new ArrayList<>());
        ownerRepository.save(owner);
        mockMvc.perform(post("/api/owners/signup")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"name": "name",
                                "email":  "test@test.com",
                                "password":  "12345",
                                "locationIds": []
                                }
                                """))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                               {"name": "name",
                                "email":  "test@test.com",
                                "password":  "12345",
                                "locationIds": []
                                }
                                                """));

    }
}