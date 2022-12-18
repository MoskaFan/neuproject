package de.neuefische.backend.controller;
import de.neuefische.backend.modelle.Owner;
import de.neuefische.backend.modelle.OwnerDTO;
import de.neuefische.backend.service.OwnerService;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping ("api/owners")
public class OwnerController {
    private final OwnerService ownerService;

    public OwnerController(OwnerService ownerService) {
        this.ownerService = ownerService;
    }
    @PostMapping("/signup")
    public Owner addOwner(@RequestBody OwnerDTO ownerDTO){
        return ownerService.addOwner(ownerDTO);
    }
}