package de.neuefische.backend.modelle;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Location {

    private String id;
    private String name;
    private String image;
    private String description;
    private String website;
    private BigDecimal pricePerPerson;
    private double size;
    private String eventType;
    private int maxCapacity;
    private Address address;
    private LocalDate startDate;
    private LocalDate endDate;


}
