package de.neuefische.backend.repository;
import de.neuefische.backend.modelle.Location;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Qualifier("locations")
@Repository
public interface LocationRepository extends MongoRepository<Location, String> {



}
