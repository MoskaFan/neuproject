package de.neuefische.backend.controller;
import de.neuefische.backend.model.LocationDTO;
import de.neuefische.backend.model.Owner;
import de.neuefische.backend.model.OwnerDTO;
import de.neuefische.backend.service.OwnerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.util.Optional;

@RestController
@RequestMapping("/api/owners/")
public class OwnerController {
    private final OwnerService ownerService;

    public OwnerController(OwnerService ownerService) {
        this.ownerService = ownerService;
    }

    @PostMapping()
    public Owner addOwner(@RequestBody OwnerDTO ownerDTO) {
        return ownerService.addOwner(ownerDTO);
    }

    @PostMapping("/login/")
    public Object login() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    @GetMapping("/{username}")
    public Owner getOwnerByUsername(@PathVariable String username) {
        return ownerService.getOwnerByUsername(username);
    }

    @PutMapping("/locations/location/")
    public OwnerDTO addLocation(Principal principal, @RequestBody LocationDTO locationDTO) {
        return ownerService.addLocation(principal, locationDTO);
    }

    @GetMapping("/login/me")
    public ResponseEntity<OwnerDTO> helloMe(Principal principal) {
        if (principal != null) {
            return new ResponseEntity<>(ownerService.getOwnerInfo(principal.getName()), HttpStatus.OK);
        }
        return new ResponseEntity<>(ownerService.returnAnonymousUser(), HttpStatus.OK);
    }


    @PostMapping("/logout")
    public String logout(HttpSession httpSession) {
        httpSession.invalidate();
        SecurityContextHolder.clearContext();
        return "anonymousUser";
    }


    @GetMapping("/login/owner")
    public Optional<Owner> getOwnerByUsername(Principal principal) {
        return ownerService.getOwnerByUsername(principal);
    }

    @PutMapping("/locations/location/{locationId}")
    public Owner editLocation(Principal principal, @PathVariable String locationId,
                              @RequestBody LocationDTO locationDTO) {

    return ownerService.editLocation(principal, locationId, locationDTO);
    }
    @DeleteMapping ("/locations/location/{locationId}")
    public Owner deleteLocation(Principal principal, @PathVariable String locationId) {

        return ownerService.deleteLocation(principal, locationId);
    }
}


