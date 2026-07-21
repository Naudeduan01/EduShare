const request = require("supertest");
const app = require("../src/app");

describe("Categorias", () => {

    test("GET /categorias deve retornar 200", async () => {

        const response = await request(app)
            .get("/categorias");

        expect(response.status).toBe(200);

    });

});