package de.neuefische.backend.repository;
import de.neuefische.backend.modelle.Owner;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OwnerRepository extends MongoRepository<Owner, String> {

}
