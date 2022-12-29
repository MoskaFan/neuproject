package de.neuefische.backend.service;
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
import java.util.Optional;


@Service
public class OwnerService implements UserDetailsService {

    private final OwnerRepository ownerRepository;

    private final IDGenerator idGenerator;

    public OwnerService(OwnerRepository ownerRepository, IDGenerator idGenerator) {
        this.ownerRepository = ownerRepository;
        this.idGenerator = idGenerator;
    }


    public Owner addOwner(OwnerDTO owner){
        String id = idGenerator.generateID();
        String password = new Argon2PasswordEncoder().encode(owner.password());
        Owner newOwner = new Owner(id, owner.username(),
                owner.email(), password, owner.locations());
        return ownerRepository.save(newOwner);
    }

    public Optional<Owner> getOwnerById(String ownerId) {

            return ownerRepository.findById(ownerId);

    }



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
             {
        Owner owner = ownerRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User with username: "
                        + username + " not found!"));

        return new User(owner.getUsername(), owner.getPassword(), List.of());
    }

    public Owner updateOwner(String ownerId, Owner owner) {
        if(getOwnerById(ownerId).isPresent()){
            return ownerRepository.insert(owner);
        }
        return ownerRepository.save(owner);
    }

}





