package de.neuefische.backend.controller;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.backend.modelle.Owner;
import de.neuefische.backend.modelle.OwnerDTO;
import de.neuefische.backend.repository.OwnerRepository;
import de.neuefische.backend.service.IDGeneratorService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@ActiveProfiles("StandardUser")
class OwnerControllerTest {
    @Autowired
    MockMvc mockMvc;
    @Autowired
    IDGeneratorService idGenerator;
    @Autowired
    OwnerRepository ownerRepository;
    @Autowired
    ObjectMapper objectMapper;

    @WithMockUser(username = "StandardUser")
    @Test
    @DirtiesContext
    void when_positive_then_new_owner_is_created() throws Exception {


        mockMvc.perform(post("/api/owners").contentType(MediaType.APPLICATION_JSON).content("""
                {"username": "StandardUser",
                "email":  "test@test.com",
                "password": "password",
                "locations": []
                }
                """).with(csrf())).andExpect(status().isOk()).andExpect(content().json("""
                 {
                 "username": "StandardUser",
                  "email":  "test@test.com",
                  "locations": []
                }
                 """));


    }

    @Test
    @DirtiesContext
    @WithMockUser(username = "StandardUser")
    void when_positive_then_user_is_logged_in() throws Exception {
        mockMvc.perform(post("/api/owners/login").contentType(MediaType.APPLICATION_JSON).content("""
                        {
                             "username": "StandardUser",
                             "password": "password",
                             "email": "test@test.com"
                        }
                                """).with(csrf())).andExpect(status().isOk())
                .andExpect(content().string("StandardUser"));

    }


    @Test
    @DirtiesContext
    @WithMockUser(username = "StandardUser")
    void when_positive_then_user_is_found_by_id() throws Exception {
        OwnerDTO ownerDTO = new OwnerDTO("StandardUser", "test@test.com", "password", new ArrayList<>());
        Owner owner = new Owner("10", ownerDTO.username(), ownerDTO.email(), ownerDTO.password(), ownerDTO.locations());
        ownerRepository.save(owner);
        mockMvc.perform(get("/api/owners/10"))

                .andExpect(status().isOk()).andExpect(content().json("""
                         {
                         "username": "StandardUser",
                          "email":  "test@test.com",
                          "locations": []
                        }
                         """));
    }

    @Test
    @DirtiesContext
    @WithMockUser(username = "StandardUser")
    void when_positive_then_location_is_added_by_consisting_owner() throws Exception {
        OwnerDTO ownerDTO = new OwnerDTO("StandardUser", "test@test.com",
                "password", new ArrayList<>());
        Owner owner = new Owner("10", ownerDTO.username(), ownerDTO.email(),
                ownerDTO.password(), ownerDTO.locations());
        ownerRepository.save(owner);
        mockMvc.perform(put("/api/owners/login/me").contentType(MediaType.APPLICATION_JSON).content("""
                        {"name": "name",
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
                        "houseNumber": "12"}}
                        """).with(csrf()))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        {"id":"10",
                        "username":"StandardUser",
                        "email":"test@test.com",
                        "password":"password",
                        "locations":[{"name":"name",
                        "image":"image",
                        "description":"description",
                        "website":"website",
                        "pricePerPerson":"120",
                        "size":20,
                        "eventType":"Hochzeit",
                        "maxCapacity":50,
                        "address":
                        {"addressId":null,
                        "country":"Deutschland",
                        "city":"Hamburg",
                        "zipCode":"00000",
                        "street":"Test Street",
                        "houseNumber":"12"},
                        "startDate": null,
                        "endDate": null}]}

                        """));
    }

    @WithMockUser(username = "username")
    @Test
    @DirtiesContext
    void when_positive_then_the_username_of_owner_is_determined() throws Exception {
        mockMvc.perform(get("/api/owners/login/me"))
                .andExpect(status().isOk())
                .andExpect(content().string("username"));
    }

    @Test
    @DirtiesContext
    void when_positive_then_expect_anonymous_user() throws Exception {

        mockMvc.perform(get("/api/owners/login/me"))
                .andExpect(status().isOk())
                .andExpect(content().string("anonymousUser"));
    }
}