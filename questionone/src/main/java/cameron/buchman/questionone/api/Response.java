package cameron.buchman.questionone.api;

public class Response {

    private String encodedMessage;

    public Response() {
        encodedMessage = "";
    }

    public Response(String text) {
        this.encodedMessage = text;
    }

    public String getMessage() {
        return encodedMessage;
    }

    public void setResponse(String encodedMessage) {
        this.encodedMessage = encodedMessage;
    }
}