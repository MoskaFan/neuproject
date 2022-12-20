package de.neuefische.backend.modelle;


import java.math.BigDecimal;
import java.time.LocalDate;

public record LocationDTO(
         String name,
         String image,
         String description,
         String website,
         BigDecimal pricePerPerson,
         double size,
         String eventType,
         int maxCapacity,
         Address address,
         LocalDate startDate,
         LocalDate endDate) {
}
