package de.neuefische.backend.service;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.util.UUID;

@Service
public class IDGenerator {
    @Value("${custom.id_prefix}")
    private String idPrefix;
    public String generateID(){
        UUID id = UUID.randomUUID();
        return idPrefix + id;
    }
}
