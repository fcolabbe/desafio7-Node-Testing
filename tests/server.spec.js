const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    it('debería devolver un status code 200 y un array con al menos un objeto', async () => {
        const response = await request(server).get('/cafes');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it('debería devolver un status code 404 si se intenta eliminar un café con un id inexistente', async () => {
        const nonExistentId = 9999; // Un ID que no existe en cafes.json
        const response = await request(server).delete(`/cafes/${nonExistentId}`).set('Authorization', 'Bearer token');
        expect(response.statusCode).toBe(404);
    });

    it('debería agregar un nuevo café y devolver un status code 201', async () => {
        const newCafe = { id: 5, nombre: 'Café Mocha' }; // Ajusta este objeto según tu API
        const response = await request(server).post('/cafes').send(newCafe);
        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining(newCafe)]));
    });

    it('debería devolver un status code 400 si el id en los parámetros es diferente al id dentro del payload', async () => {
        const updateCafe = { id: 6, nombre: 'Café Americano' }; // Id en el payload
        const response = await request(server).put('/cafes/3').send(updateCafe); // Id en el parámetro de la ruta
        expect(response.statusCode).toBe(400);
    });
    
});
