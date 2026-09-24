// tests/unit/parseId.test.js
const parseId = require("../../src/helpers/parseId");
const { ValidationError } = require("../../src/errors/AppError");

describe("parseId", () => {
    it("lança ValidationError quando o id não é número", () => {
        expect(() => parseId("abc")).toThrow(ValidationError);
    });

    // DESAFIO: escrevam aqui um teste para a pergunta abaixo
    it("retorna o ID convertido em número quando recebe uma string numérica válida", () => {
        const resultado = parseId("123");
        expect(resultado).toBe(123);
    });
});
