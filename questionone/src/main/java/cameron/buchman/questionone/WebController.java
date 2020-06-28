package cameron.buchman.questionone;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class WebController {

    @RequestMapping("/")
    public String index() {
        return "Hello this is a test";
    }
}