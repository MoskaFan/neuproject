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
@RequestMapping ("/api/owners")
public class OwnerController {
    private final OwnerService ownerService;

    public OwnerController(OwnerService ownerService) {
        this.ownerService = ownerService;
    }
    @PostMapping()
    public Owner addOwner(@RequestBody OwnerDTO ownerDTO){
        return ownerService.addOwner(ownerDTO);
    }
    @PostMapping("/login")
    public String login(){
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }
    @GetMapping("/{ownerId}")
    public Owner getOwnerById(@PathVariable String ownerId){
        return ownerService.getOwnerById(ownerId);
    }
    @PutMapping("/{ownerId}")
    public Owner addLocation(@PathVariable String ownerId, @RequestBody LocationDTO locationDTO){
        return ownerService.addLocation(ownerId, locationDTO);
    }
    @GetMapping("/login/me")
    public String helloMe(Principal principal){

        if(principal != null){
            return principal.getName();
        }
        return "anonymousUser";
    }
    @PostMapping("/logout")
    public String logout(HttpSession httpSession){
        httpSession.invalidate();
        SecurityContextHolder.clearContext();
        return "anonymousUser";
    }

}
