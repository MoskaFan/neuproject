package de.neuefische.backend.model;
import java.math.BigDecimal;
import java.time.LocalDate;

public record LocationDTO (

     String name,
     String image,
     String description,
     String website,
     BigDecimal pricePerPerson,
     int size,
     String eventType,
     int maxCapacity,
     Address address,
     LocalDate startDate,
     LocalDate endDate)
    {
}
