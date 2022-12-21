package de.neuefische.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.backend.modelle.Address;
import de.neuefische.backend.modelle.Location;

import de.neuefische.backend.repository.LocationRepository;

import de.neuefische.backend.service.IDGenerator;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;
import java.time.LocalDate;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
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
    @WithMockUser(username="StandardUser")
    @Test
    @DirtiesContext
    void addLocation() throws Exception {
        Location newLocation = new Location("123","name", "image","description",
                "website", new BigDecimal("124"), 20.00,
                "Hochzeit", 50, new Address("134", "Deutschland",
                "Hamburg", "00000",
                "Test Street", "12"),
                LocalDate.of(2022, 12, 20),
                LocalDate.of(2022, 12, 28));
                locationRepository.save(newLocation);
        mockMvc.perform(post("/api/locations/newlocation")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"id": "123",
                                "name": "name",
                                "image": "image",
                                "description": "description",
                                "website": "website",
                                "pricePerPerson": 124,
                                "size": 20.00,
                                "eventType":"Hochzeit",
                                "maxCapacity": 50,
                                "address": {
                                "adressId": "134",
                                "country": "Deutschland",
                                "city": "Hamburg",
                                "zipCode": "00000",
                                "street": "Test Street",
                                "houseNumber": "12"
                                },
                                "startDate" : "2022-12-20",
                                "endDate" : "2022-12-28"
                                }
                                """).with(csrf()))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                              {
                                "name": "name",
                                "image": "image",
                                "description": "description",
                                "website": "website",
                                "pricePerPerson": 124,
                                "size": 20.00,
                                "eventType":"Hochzeit",
                                "maxCapacity": 50,
                                "address": {

                                "country": "Deutschland",
                                "city": "Hamburg",
                                "zipCode": "00000",
                                "street": "Test Street",
                                "houseNumber": "12"
                                },
                                "startDate" : "2022-12-20",
                                "endDate" : "2022-12-28"
                                }
                                                """));

    }
}