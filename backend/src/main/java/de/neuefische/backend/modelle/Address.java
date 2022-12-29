package de.neuefische.backend.modelle;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Address {

private String addressId;
    private String country;
    private String city;
    private String zipCode;
    private String street;
    private String houseNumber;

}
