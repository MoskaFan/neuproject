package de.neuefische.backend.modelle;




public record LocationDTO(
         String name,
         String image,
         String description,
         String website,
         String pricePerPerson,
         String size,
         String eventType,
         String maxCapacity,
         Address address,
         String startDate,
         String endDate) {

}
