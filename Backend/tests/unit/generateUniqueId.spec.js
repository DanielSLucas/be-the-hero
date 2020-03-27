const generateUniqueId  = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    })
});

// Teste unico usando a biblioteca do Jest. para executar o teste digite no terminal "npm test"