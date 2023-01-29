package de.neuefische.backend.model;

import java.util.List;

public record OwnerDTO(String username,
                       String email,
                       String password,
                       List<Location> locations) {
}
