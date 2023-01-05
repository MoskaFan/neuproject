package de.neuefische.backend.modelle;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.math.BigDecimal;
import java.time.LocalDate;

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
    private BigDecimal pricePerPerson;
    private int size;
    private String eventType;
    private int maxCapacity;
    private Address address;
    private LocalDate startDate;
    private LocalDate endDate;


}
