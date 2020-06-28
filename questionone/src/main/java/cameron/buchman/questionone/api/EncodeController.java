package cameron.buchman.questionone.api;

import java.util.concurrent.atomic.AtomicInteger;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EncodeController {

    private static final String template = "Hello, %s!";
    private final AtomicInteger counter = new AtomicInteger();

    private EncodeRepository repo;

    EncodeController() {
        this.repo = new EncodeRepository();
    }

    EncodeController(EncodeRepository repository) {
        this.repo = repository;
    }

    // What is being tested
    @PostMapping("/api/encode")
    ResponseEntity<Response> encodeMessage(@RequestBody Map<String, String> data) {
        return new ResponseEntity<Response>(repo.save(data.get("shift"), data.get("message")), HttpStatus.OK);
    }
}