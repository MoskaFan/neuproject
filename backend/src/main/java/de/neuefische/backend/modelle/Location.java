package de.neuefische.backend.modelle;

import lombok.AllArgsConstructor;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document("locations")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Location {
@Id
    private String id;
    private String name;
    private String image;
    private String description;
    private String website;
    private String pricePerPerson;
    private String size;
    private String eventType;
    private String maxCapacity;
    private Address address;
    private String startDate;
    private String endDate;


}
