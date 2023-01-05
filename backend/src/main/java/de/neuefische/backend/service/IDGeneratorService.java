package de.neuefische.backend.service;
import org.springframework.stereotype.Service;
import java.util.UUID;

@Service
public class IDGeneratorService {
    public String generateID(){
        UUID uuid = UUID.randomUUID();
        return uuid.toString();
    }
}
