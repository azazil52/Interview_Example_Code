# Background - Create a Web Server
-  The objective of this project was to create and document a webserver that can perform the requested capabilities while accomplishing the 
  primary task of: encoding messages with a shift cypher.
## Webserver Specifications ##     
-  The webserver should run on port : **23456**
-  The webserver has an endpoint at: **/api/encode**
  -   This endpoint should accept post requests
  -   This endpoint expects a JSON string to be recieved. The JSON structure should have two keys
      -   The JSON structure should have a key Shift . It’s value should be an integer.
      -   The JSON structure should have a key Message . It’s value should be a string.
  -  When the JSON payload is received, it should encode the provided message using the shift cipher method.
  -  When the message is successfully encoded, it should be stored in a file on disk.
  -  The endpoint should return a json object with a single key "EncodedMessage".The value returned should be the 
     string you successfully encoded. If unsuccessful, it should return an empty string.


# How to run Application
-   Question 1 was written using java Spring Boot and can be run by using the command -> (mvn clean install) while in the questionone folder
-   Next run the program from the included jar that is made for this purpose -> <java -jar target/questionone-0.0.1-SNAPSHOT.jar>
