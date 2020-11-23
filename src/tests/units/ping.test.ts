import request from "supertest";

import server from "../../app/server";

afterEach((done) => {
  // Close the server after each test
  server.close();
  done();
});

describe("routes/ping", () => {
  it("Should pong!", async () => {
    const response = await request(server).get("/ping");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.data).toEqual("pong");
  });
});
