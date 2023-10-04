let calcularGasto = require("./script.js")

test ('Calcular gasto de combustivel com gasolina', () => {
    expect(calcularGasto(16000 , 'gasolina')).toBe(1)
})
test ('Calcular gasto de combustivel com etanol' , () => {
    expect(calcularGasto(11000 , 'etanol')).toBe(1)
})
//=====================================================//
                 //TESTE INVALIDO AGORA!//

test('Calcular o gasto e combustivel com corote' , () => {
    expect(() => {calcularGasto(9000 , 'corote')}).toThrow('Apenas esses dois combustiveis (gasolina e etanol)')
})     