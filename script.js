
function GastoCombustivelPorKM (distanciaEmMetros , TipoCombustivel){
   if (TipoCombustivel != 'gasolina' && TipoCombustivel != 'etanol') {
    throw new Error ("Apenas esses dois combustiveis (gasolina e etanol)")                                // 
   }
    let ConsumoDoCarro;
   if (TipoCombustivel == 'gasolina') {                // Um carro roda 16Km/LITRO com gasolina e 11km/LITRO com etanol
    ConsumoDoCarro = 16                                       
   }else{
ConsumoDoCarro = 11
   }

if (distanciaEmMetros < 0 && typeof distanciaEmMetros !== Number) {   // O parâmetro de distância deve ser um inteiro e não pode
    throw new Error ("Apenas numeros positivos!")                           // ser negativo. Já o de combustível deve ser uma string 
                                                                      // e só pode ter “gasolina” ou “etanol”
}
    
 
const LitrosNecessarios = distanciaEmMetros/ 1000 / ConsumoDoCarro
return LitrosNecessarios

}
module.exports = (GastoCombustivelPorKM);
