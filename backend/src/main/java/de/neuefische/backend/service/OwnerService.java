package de.neuefische.backend.service;
import de.neuefische.backend.repository.OwnerRepository;
import de.neuefische.backend.modelle.Owner;
import de.neuefische.backend.modelle.OwnerDTO;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class OwnerService {
    private final OwnerRepository ownerRepository;
    private final IDGenerator idGenerator;

    public OwnerService(OwnerRepository ownerRepository, IDGenerator idGenerator) {
        this.ownerRepository = ownerRepository;
        this.idGenerator = idGenerator;
    }

    public Owner addOwner(OwnerDTO owner){
        String id = idGenerator.generateID();

        Owner newOwner = new Owner(id, owner.name(),
                owner.email(), owner.password(), owner.locationIds());
        return ownerRepository.save(newOwner);
    }
}
