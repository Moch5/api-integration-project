/**
 * Will contain the server code.
 * Import the secret keys
 * run the server
 */

// import keyword -> import <define what is to imported> from <define the source of the desired file/folder>

import express from "express";

// define new express application

// define a variable

const server = express();
server.use(express.json());

// define the middlewares ? Client -> network -> server -> middleware(pre-operations) -> server endpoints
/**
 * middlewares can define:
 * 1. Security for authentication -> api keys etc
 * 2. Rate limiting -> protecting the server from (Denial of Service) DOS attacks
 * 3. Logging -> pringint out the current operations
 */

// GET, POST, PUT, DELETE -> CRUD
server.post("/", (request, response) => {
  /**
   *
   * Response -> status code, error messages, defining the pattern for returning data
   */
  console.log(request.body());
  return response.status(200).json({
    message: " Our post endpoint is live",
  });
}); // posting data C

/**
 *
 * Domains -> human readable IP addresses
 *
 * safaricom.co.ke -> IP address:PORT -> main MPESA server
 */

// server.get("/"); // fetch data R
// server.put("/"); // update endpoint U
// server.delete("/"); // delete endpoint D

// 0 - 65000
server.listen(1111, () => {
  console.log("Our API integration server is live on port 1111");
});
