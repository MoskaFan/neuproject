package de.neuefische.backend.service;

import de.neuefische.backend.model.*;
import de.neuefische.backend.repository.LocationRepository;
import de.neuefische.backend.repository.OwnerRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.*;


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

    public Owner addOwner(OwnerDTO owner) {
        String id = idGenerator.generateID();
        String password = new Argon2PasswordEncoder().encode(owner.password());
        Owner newOwner = new Owner(id, owner.username(),
                owner.email(), password, owner.locations());
        return ownerRepository.save(newOwner);
    }

    public Owner getOwnerByUsername(String username) {
        return ownerRepository.findByUsername(username)
                .orElseThrow(() -> new NoSuchOwnerException(username));
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return ownerRepository.findByUsername(username)
                .map(foundOwner -> new User(foundOwner.getUsername(), foundOwner.getPassword(),
                        List.of()))
                .orElseThrow(() -> new UsernameNotFoundException("User with username: "
                        + username + " not found!"));

        }

    public OwnerDTO returnAnonymousUser() {
        List<Location> locations = new ArrayList<>();
        return new OwnerDTO("anonymousUser", "", "", locations);
    }


    public OwnerDTO addLocation(Principal principal,
                             LocationDTO locationDTO) {
        Owner owner = ownerRepository.findByUsername(principal.getName()).orElseThrow();
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
        ownerRepository.save(owner);
        return new OwnerDTO(owner.getUsername(), owner.getEmail(),
                owner.getPassword(), owner.getLocations());
    }

    private Owner getOwnerById(String ownerId) {
        return ownerRepository.findById(ownerId).orElseThrow(() -> new NoSuchElementException(ownerId));

    }

    public Optional<Owner> getOwnerByUsername(Principal principal) {
        String username = principal.getName();
        return ownerRepository.findByUsername(username);
    }

    public Owner deleteLocationInOwnerData(String ownerId, String locationId){
        Owner owner = getOwnerById(ownerId);

        for (Location oldLocation : owner.getLocations()) {
            if (oldLocation.getId().equals(locationId)) {
                owner.getLocations().remove(oldLocation);
                return ownerRepository.save(owner);
            }
        }
       return owner;
    }
    public Owner editLocation(Principal principal, String locationId,
                          LocationDTO locationDTO) {

        Owner owner = ownerRepository.findByUsername(principal.getName()).orElseThrow();
        Location location = new Location(locationId, locationDTO.name(),
                locationDTO.image(), locationDTO.description(),
                locationDTO.website(),
                locationDTO.pricePerPerson(), locationDTO.size(),
                locationDTO.eventType(), locationDTO.maxCapacity(),
                locationDTO.address(), locationDTO.startDate(),
                locationDTO.endDate());

        locationRepository.deleteById(locationId);
        locationRepository.save(location);

        owner = deleteLocationInOwnerData(owner.getId(), locationId);
        owner.getLocations().add(location);

        return ownerRepository.save(owner);
    }

    public Owner deleteLocation(Principal principal, String locationId) {

        Owner owner = ownerRepository.findByUsername(principal.getName()).orElseThrow();
        locationRepository.deleteById(locationId);
        owner = deleteLocationInOwnerData(owner.getId(), locationId);
        return ownerRepository.save(owner);
    }


    public OwnerDTO getOwnerInfo(String username) {
        Owner owner = ownerRepository.findByUsername(username)
                .orElseThrow(() ->
                        new UsernameNotFoundException(username)
                );
        return new OwnerDTO(owner.getUsername(), owner.getEmail(), owner.getPassword(), owner.getLocations());
    }
}





