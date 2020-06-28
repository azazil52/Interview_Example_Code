package cameron.buchman.questionone.api;

import java.util.List;
import java.util.ArrayList;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class EncodeRepository {

    // For our post requests
    /**
     * @return should return a 200 if success, 500 if not
     * @return Will return a json object with a single key EncodedMessage
     */
    public Response save(String shiftString, String content) {
        Response response = new Response();
        int shift = Integer.parseInt(shiftString);

        try {
            response = encodeValue(shift, content, response);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return response;
    }

    private Response encodeValue(int shift, String content, Response passedVal) throws IOException {

        Response converted = passedVal;

        // Performing the shift cipher
        converted.setResponse(cipher(content, shift));

        // Saving the information to a file
        File convertFile = new File(content + ".txt");
        convertFile.createNewFile();
        FileOutputStream fout = new FileOutputStream(convertFile);

        fout.write(converted.getMessage().getBytes());
        fout.close();

        return converted;
    }

    private String cipher(String msg, int shift) {
        String s = "";
        int len = msg.length();
        for (int x = 0; x < len; x++) {
            char c = (char) (msg.charAt(x) + shift);
            if (c > 'z')
                s += (char) (msg.charAt(x) - (26 - shift));
            else
                s += (char) (msg.charAt(x) + shift);
        }
        return s;
    }
}