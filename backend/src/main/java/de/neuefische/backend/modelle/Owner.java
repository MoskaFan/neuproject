package de.neuefische.backend.modelle;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Document("owners")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Owner {
    @Id
    private String id;
    private String name;
    private String email;
    private String password;
    private List<String> locationIds;

}