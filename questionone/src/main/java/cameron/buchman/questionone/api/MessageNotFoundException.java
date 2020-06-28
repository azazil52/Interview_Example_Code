package cameron.buchman.questionone.api;

public class MessageNotFoundException extends RuntimeException {

    MessageNotFoundException(int id) {
        super("Could not find message: " + id);
    }
}