package de.neuefische.backend.modelle;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.ArrayList;
import java.util.List;
@Document("owners")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Owner {
    @Id
    private String id;
    private String username;
    private String email;
    private String password;
    private List<Location> locations = new ArrayList<>();

}
