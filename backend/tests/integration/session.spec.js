const request = require('supertest');
const app = require('../../src/app');

describe('SESSION', () => {
    it('should be able to create a new SESSION', async () => {
        const response = await request(app)
            .post('/sessions')
            .send({
                id: "1bda4457"
            });
        expect(response.body).toHaveProperty('name');
    });
});