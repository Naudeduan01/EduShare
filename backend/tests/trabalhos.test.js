const request = require("supertest");
const app = require("../src/app");

describe("Trabalhos", () => {

    test("GET /trabalhos deve retornar 200", async () => {

        const response = await request(app)
            .get("/trabalhos");

        expect(response.status).toBe(200);

    });

});