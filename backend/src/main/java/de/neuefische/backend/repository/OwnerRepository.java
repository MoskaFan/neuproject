package de.neuefische.backend.repository;
import de.neuefische.backend.modelle.Owner;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
@Repository
public interface OwnerRepository extends MongoRepository<Owner, String> {

    Optional <Owner> findByUsername(String username);

}
