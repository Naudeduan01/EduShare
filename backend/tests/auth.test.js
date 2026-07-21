const request = require("supertest");
const app = require("../src/app");

describe("Autenticação", () => {

    test("Login inválido deve retornar 401", async () => {

        const response = await request(app)
            .post("/login")
            .send({

                email: "naoexiste@email.com",

                senha: "123456"

            });

        expect(response.status).toBe(401);

    });

});