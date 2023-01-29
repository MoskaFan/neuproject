package de.neuefische.backend.repository;
import de.neuefische.backend.model.Owner;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
@Qualifier("owners")
@Repository
public interface OwnerRepository extends MongoRepository<Owner, String> {

    Optional <Owner> findByUsername(String username);

}
