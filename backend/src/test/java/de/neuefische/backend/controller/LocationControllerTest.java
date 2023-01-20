package de.neuefische.backend.controller;
import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.backend.modelle.Address;
import de.neuefische.backend.modelle.Location;
import de.neuefische.backend.repository.LocationRepository;
import de.neuefische.backend.service.IDGeneratorService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;


import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
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
    IDGeneratorService idGenerator;
    @Autowired
    LocationRepository locationRepository;
    @Autowired
    ObjectMapper objectMapper;

    @WithMockUser(username = "StandardUser")
    @Test
    @DirtiesContext
    void when_positive_then_empty_list_is_got() throws Exception {
        mockMvc.perform(get("/api/locations/"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        []
                         """));



    }
    @Test
    @DirtiesContext
    @WithMockUser("StandardUser")
    void wenn_positive_then_location_with_id_140_wil_be_got() throws Exception {
        Location location = new Location("140", "name",
                "image", "description", "website", new BigDecimal("120"),
                20, "Hochzeit", 50,
                new Address("Deutschland", "Hamburg", "00000", "Test Street",
                        "12"), null, null);

        locationRepository.save(location);
        mockMvc.perform(get("/api/locations/140").with(csrf()))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                         {"id":"140",
                                "name": "name",
                                "image": "image",
                                "description": "description",
                                "website": "website",
                                "pricePerPerson":"120",
                                "size": 20,
                                "eventType":"Hochzeit",
                                "maxCapacity": 50,
                                "address": {
                                "country": "Deutschland",
                                "city": "Hamburg",
                                "zipCode": "00000",
                                "street": "Test Street",
                                "houseNumber": "12"},
                         "startDate": null,
                         "endDate": null}

                        """));

    }
}

