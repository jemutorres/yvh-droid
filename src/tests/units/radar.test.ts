import request from "supertest";

import server from "../../app/server";

afterEach((done) => {
  // Close the server after each test
  server.close();
  done();
});

describe("routes/radar", () => {
  it("Should work!", async () => {
    const response = await request(server)
      .post("/radar")
      .send({
        protocols: ["avoid-mech"],
        scan: [
          {
            coordinates: { x: 0, y: 40 },
            enemies: { type: "soldier", number: 10 },
          },
          {
            coordinates: { x: 0, y: 80 },
            allies: 5,
            enemies: { type: "mech", number: 1 },
          },
        ],
      });
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.x).toEqual(0);
    expect(response.body.y).toEqual(40);
  });
});
