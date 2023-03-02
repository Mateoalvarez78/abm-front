/* 
Crear un algoritmo que recorra un array unidimensional conteniendo letras y números: [ “a”, 10, “b”, “hola”, 122, 15]
a- Obtenga un array que contenga solo letras
b- Obtenga un array que contenga sólo números
c- Obtenga el mayor número del array anterior

*/

// Ejercicio 1 parte a

const myArr =  [ "a", 10, "b", "hola", 122, 15];

let arrLet = myArr.filter((item) => {
    return typeof item == "string";
})

// Ejercicio 1 parte b

let arrNum = myArr.filter((item)=>{
    return typeof item == "number";
})

//// Ejercicio 1 parte c

let maxNum = Math.max(...arrNum);

/*
Crear un algoritmo de búsqueda que verifique que: el valor let a = 10 no esté dentro del array: [ 1, 11, “a”, “b”, 123]
Utilizar el loop FOR
*/

const verifyArray = [ 1, 11, "a", "b", 123];

for(let i = 0; i < verifyArray.length; i++){
    verifyArray[i] != 10? console.log("no se encuentra el numero 10") : console.log("Se encuentra el numero 10 en la posición", i)
}

/* 
Cree un algoritmo que genere el siguiente patrón de ID aleatorio: XXXX-AAAA-BBBB-CCCC
El patrón XXXX, AAAA, BBBB e CCCC son alfanumericos aleatorios
El patrón de string: "XXXX-AAAA-BBBB-CCCC"
El resultado debe ser almacenado en una variable. Por ejemplo:
let id = generarId()
id vale ~ abc1-bb12-234a-bcc2

*/


const  generateRandomString = () => {
    const characters ='XABC0123456789';
    let result1= ' ';
    let num = 16;
    let laps = 0;
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        laps += 1;
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
        if(laps % 4 == 0 && laps != num){
            result1 += "-"
        }
    }
    return result1;
}

console.log(generateRandomString())