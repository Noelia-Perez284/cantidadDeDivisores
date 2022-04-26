// Ejercicio: Divisores
// • Implemente un método llamado cantidadDeDivisores que
// reciba un número entero y devuelva la cantidad de divisores
// • Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8,
// 16, por lo que la respuesta debería ser 5
// • Re-utilice el método esMultiplo implementado para el ejercicio
// anterior

let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let inputNumero1 = <HTMLInputElement>document.getElementById("numero1");
let resultado = <HTMLElement>document.getElementById("resultado");

function cantidadDeDivisores(valor_1: number): number {
  let numeroDeDivisores: number = 0;
  let divisores: string = "";
  for (let i: number = 1; i <= valor_1; i++) {
    let resto = valor_1 % i;
    if (resto === 0) {
      numeroDeDivisores = numeroDeDivisores + 1;
      divisores = divisores + i + " ";
    }
  }
  console.log("los divisores son " + divisores);
  return numeroDeDivisores;
}

btnEnviar.addEventListener("click", () => {
  let numero_1: number = Number(inputNumero1.value);
  let cantidad: number = cantidadDeDivisores(numero_1);
  resultado.innerHTML = `Los divisores de ${numero_1} son: ${cantidad}`;
});
