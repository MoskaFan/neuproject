package de.neuefische.backend.service;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class NoSuchOwnerException extends IllegalArgumentException {
    public NoSuchOwnerException(String username) {
        super(username);
    }

}
