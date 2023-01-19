package de.neuefische.backend.controller;

import de.neuefische.backend.modelle.LocationDTO;
import de.neuefische.backend.modelle.Owner;
import de.neuefische.backend.modelle.OwnerDTO;
import de.neuefische.backend.service.OwnerService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.security.Principal;

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

    @PostMapping("/login")
    public String login() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    @GetMapping("/{username}")
    public Owner getOwnerByUsername(@PathVariable String username) {
        return ownerService.getOwnerByUsername(username);
    }

    @PutMapping("/locations/{ownerId}")
    public Owner addLocation(@PathVariable String ownerId, @RequestBody LocationDTO locationDTO) {
        return ownerService.addLocation(ownerId, locationDTO);
    }

    @PutMapping("/{ownerId}")
    public Owner updateOwner(@PathVariable String ownerId, @RequestBody OwnerDTO owner) {
        Owner editedOwner = new Owner(ownerId, owner.username(),
                owner.email(), owner.password(), owner.locations());
        return ownerService.updateOwner(ownerId, editedOwner);
    }

    @GetMapping("/login/me")
    public String helloMe(Principal principal) {
        if (principal != null) {
            return principal.getName();
        }
        return "Anonymous User";
    }

    @PostMapping("/logout")
    public String logout(HttpSession httpSession) {
        httpSession.invalidate();
        SecurityContextHolder.clearContext();
        return "anonymousUser";
    }

    @GetMapping("/login/")
    public String getOwnerIdByUsername(Principal principal) {
        return ownerService.getOwnerIdByUsername(principal);
    }

    @PutMapping("/locations/{ownerId}/{locationId}")
    public Owner editLocation(@PathVariable String ownerId,
                                    @PathVariable String locationId, @RequestBody LocationDTO locationDTO) {

    return ownerService.editLocation(ownerId, locationId, locationDTO);
    }
    @DeleteMapping ("/locations/{ownerId}/{locationId}")
    public Owner deleteLocation(@PathVariable String ownerId,
                              @PathVariable String locationId) {

        return ownerService.deleteLocation(ownerId, locationId);
    }
}


