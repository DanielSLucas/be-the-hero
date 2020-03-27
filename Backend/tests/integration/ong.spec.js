const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback(); // É importante que antes de executar as migrations, elas sejam desfeitas para não acumular dados no banco ou afetar outros testes
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD2",
                email: "contato@apad.com",
                whatsapp: "4700000000",
                city: "Rio do Sul",
                uf: "SC"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})

//Para testar uma rota que precisa de autoriazação, é necessário adicionar a requisição um ".set()" por exemplo: set('Authorization', 'IDValido')