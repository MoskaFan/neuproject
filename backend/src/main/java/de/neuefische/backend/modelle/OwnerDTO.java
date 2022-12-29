package de.neuefische.backend.modelle;

import java.util.List;

public record OwnerDTO(String username,
                       String email,
                       String password,
                       List<String> locations ) {
}
