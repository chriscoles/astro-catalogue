package astro.catalog.server.controller;

import astro.catalog.server.entity.Messier;
import astro.catalog.server.service.MessierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Controller
@RequestMapping("/messier")
public class MessierController {

    @Autowired
    private MessierService messierService;

    @GetMapping("/list")
    @CrossOrigin
    public ResponseEntity<List<Messier>> listMessier(){
        HttpHeaders headers = new HttpHeaders();
        List<Messier> messier = messierService.getMessier();
        return new ResponseEntity<List<Messier>>(messier, headers, HttpStatus.OK);
    }


}
