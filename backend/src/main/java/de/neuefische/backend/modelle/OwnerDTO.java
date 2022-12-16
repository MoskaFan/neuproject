package de.neuefische.backend.modelle;

import java.util.List;

public record OwnerDTO(String name,
                       String email,
                       String password,
                       List<String> locationIds) {
}
