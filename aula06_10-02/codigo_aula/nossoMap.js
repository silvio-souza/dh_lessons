let array = [1, 2, 3, 4];
​
function qualquer(parametro1, parametro2, parametro3) {
  return 'Não me importa o que você quer!';
}
​
function nossoMap(arrayOriginal, callback) {
  let novoArray = [];
​
  for (let indice = 0; indice < arrayOriginal.length; indice++) {
    let item = callback(arrayOriginal[indice], indice, `Valor ${arrayOriginal[indice]}`);
    novoArray.push(item);
  }
​
  return novoArray;
}
​
array = nossoMap(array, qualquer);
​
console.log(array);