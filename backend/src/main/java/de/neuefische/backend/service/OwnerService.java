package de.neuefische.backend.service;
import de.neuefische.backend.modelle.Location;
import de.neuefische.backend.modelle.LocationDTO;
import de.neuefische.backend.repository.LocationRepository;
import de.neuefische.backend.repository.OwnerRepository;
import de.neuefische.backend.modelle.Owner;
import de.neuefische.backend.modelle.OwnerDTO;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.NoSuchElementException;


@Service
public class OwnerService implements UserDetailsService {

    private final OwnerRepository ownerRepository;
    private final LocationRepository locationRepository;
    private final IDGeneratorService idGenerator;

    public OwnerService(OwnerRepository ownerRepository, LocationRepository locationRepository, IDGeneratorService idGenerator) {
        this.ownerRepository = ownerRepository;
        this.locationRepository = locationRepository;
        this.idGenerator = idGenerator;
    }

    public Owner addOwner(OwnerDTO owner){
        String id = idGenerator.generateID();
        String password = new Argon2PasswordEncoder().encode(owner.password());
        Owner newOwner = new Owner(id, owner.username(),
                owner.email(), password, owner.locations());
        return ownerRepository.save(newOwner);
    }

    public Owner getOwnerById(String ownerId) {
            return ownerRepository.findById(ownerId)
                    .orElseThrow(()-> new NoSuchElementException(ownerId));
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
             {
        Owner owner = ownerRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User with username: "
                        + username + " not found!"));

        return new User(owner.getUsername(), owner.getPassword(), List.of());
    }


    public Owner addLocation(String ownerId, LocationDTO locationDTO) {
        Owner owner = getOwnerById(ownerId);
        String id = idGenerator.generateID();
        Location location = new Location(id, locationDTO.name(),
                locationDTO.image(), locationDTO.description(),
                locationDTO.website(),
                locationDTO.pricePerPerson(), locationDTO.size(),
                locationDTO.eventType(), locationDTO.maxCapacity(),
                locationDTO.address(), locationDTO.startDate(),
                locationDTO.endDate());
        owner.getLocations().add(location);
        locationRepository.save(location);
        return ownerRepository.save(owner);
    }


}





