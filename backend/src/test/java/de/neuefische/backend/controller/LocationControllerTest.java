package de.neuefische.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;


import de.neuefische.backend.repository.LocationRepository;

import de.neuefische.backend.service.IDGenerator;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@ActiveProfiles("StandardUser")
class LocationControllerTest {
    @Autowired
    MockMvc mockMvc;
    @Autowired
    IDGenerator idGenerator;
    @Autowired
    LocationRepository locationRepository;
    @Autowired
    ObjectMapper objectMapper;


    @WithMockUser(username = "StandardUser")
    @Test
    @DirtiesContext
    void when_positiv_then_empty_list_is_got() throws Exception {
        mockMvc.perform(get("/api/locations/"))

                .andExpect(status().isOk())
                .andExpect(content().json("""
                        []
                         """));



    }
}

