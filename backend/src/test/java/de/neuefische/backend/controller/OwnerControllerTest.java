package de.neuefische.backend.controller;


import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.backend.modelle.Owner;
import de.neuefische.backend.modelle.OwnerDTO;
import de.neuefische.backend.repository.OwnerRepository;
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
    IDGenerator idGenerator;
    @Autowired
    OwnerRepository ownerRepository;
    @Autowired
    ObjectMapper objectMapper;

    @WithMockUser(username = "StandardUser")
    @Test
    @DirtiesContext
    void addOwner() throws Exception {


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
    void login() throws Exception {
        mockMvc.perform(post("/api/owners/login").contentType(MediaType.APPLICATION_JSON).content("""
                {
                     "username": "StandardUser"
                }
                        """).with(csrf())).andExpect(status().isOk());

    }


    @Test
    @DirtiesContext
    @WithMockUser(username = "StandardUser")
    void getOwnerById() throws Exception {
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
    void updateOwner() throws Exception {
        OwnerDTO ownerDTO = new OwnerDTO("StandardUser", "test@test.com", "password", new ArrayList<>());
        Owner owner = new Owner("10", ownerDTO.username(), ownerDTO.email(), ownerDTO.password(), ownerDTO.locations());
        ownerRepository.save(owner);
        mockMvc.perform(put("/api/owners/10").contentType(MediaType.APPLICATION_JSON).content("""
                {"username": "StandardUser",
                "email":  "test@test.com",
                "password": "password",
                "locations": ["123"]
                }
                """).with(csrf())).andExpect(status().isOk()).andExpect(content().json("""
                 {
                 "username": "StandardUser",
                  "email":  "test@test.com",
                  "locations": ["123"]
                }
                 """));
    }

    @WithMockUser(username="username")
    @Test
    @DirtiesContext
    void helloMe() throws Exception {
        mockMvc.perform(get("/api/owners/login/me"))
                .andExpect(status().isOk())
                .andExpect(content().string("username"));
    }
}