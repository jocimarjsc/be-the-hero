const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('INCIDENT', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new INCIDENT', async () => {
        const response = await request(app)
            .post('/incidents')
            .set('authorization', '4fea9b16')
            .send({
                title: "Beatriz",
                description: "Detalhe do caso 469",
                value: 632
            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id);
    });
});