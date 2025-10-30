/**
 * @jest-environment node
 */

// @ts-ignore
const request = require("supertest");
const app = require("../app");

describe("This is the test for the Node Js Web Server", () => {
  test("Should return 200 response", async () => {
    // @ts-ignore
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
  });

  test("Should contain 'web server' in response body", async () => {
    // @ts-ignore
    const response = await request(app).get("/");

    expect(response.text).toContain("web server");
  });
});
