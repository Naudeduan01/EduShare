const request = require("supertest");
const app = require("../src/app");

describe("Usuários", () => {

    test("GET /usuarios deve retornar 200", async () => {

        const response = await request(app)
            .get("/usuarios");

        expect(response.status).toBe(200);

    });

});