import request from "supertest";
import fs from "fs";
import rd from "readline";

import server from "../../app/server";

afterEach((done) => {
  // Close the server after each test
  server.close();
  done();
});

describe("radar", () => {
  it("Should work!", async () => {
    const fileStream = fs.createReadStream(
      "src/tests/integrations/data/test_cases.txt"
    );
    const rl = rd.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    for await (const line of rl) {
      const data = line.split("|");
      const requestData = JSON.parse(data[0]);
      const expectedResponse = JSON.parse(data[1]);

      const response = await request(server).post("/radar").send(requestData);

      expect(response.status).toEqual(200);
      expect(response.type).toEqual("application/json");
      expect(response.body.x).toEqual(expectedResponse.x);
      expect(response.body.y).toEqual(expectedResponse.y);
    }
  });
});
