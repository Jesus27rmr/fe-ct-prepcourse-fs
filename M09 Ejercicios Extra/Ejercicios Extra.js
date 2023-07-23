/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

const { nuevoUsuario } = require("../M06 JavaScript Objetos/homework");

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   arreglo_p=[];
   for (let i in objeto){
      arreglo_h=[];
      arreglo_h.push(i);
      arreglo_h.push(objeto[i]);
      arreglo_p.push(arreglo_h);
   }
   return arreglo_p;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   
   var objeto ={};
   var n_string;
   var string_ordenada;
   string_ordenada=[];
   
   n_string=string.split('');

   n_string=n_string.sort(function(a,b){return a - b;})

   var cont=0;

   for (let i in n_string){
      if (! string_ordenada.includes(n_string[i])){
         string_ordenada.push(n_string[i]);
         for (let j in n_string){
            if (n_string[i]==n_string[j]){
            cont=cont+1;
            }}
         objeto[string[i]]=cont;
         cont=0;
   }}
   return objeto;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayusc="";
   var minusc="";
   for (let i in string){
      if (string[i]===string[i].toUpperCase()){
         mayusc=mayusc+string[i];
      }
      else {
         minusc=minusc+string[i];
      }

   }
   return mayusc+minusc;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   string_final="";
   string_n=frase.split(' ');
   for(let palabra in string_n){
      for (letra=string_n[palabra].length-1;letra>=0;letra--){
         string_final=string_final+string_n[palabra][letra]
      }
      if (palabra!=string_n.length-1){
         string_final=string_final+" ";
      }
      
   }
   return string_final;

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   numero=numero.toString();
   var inv="";
   for (i=numero.length-1;i>=0;i--){
      inv=inv+numero[i];
   }
   if (inv==numero){
      return "Es capicua"
   }
   else{
      return "No es capicua"
   }


}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   string=string.replace("a","")
   string=string.replace("b","")
   string=string.replace("c","")
   return string;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings=arrayOfStrings.sort(function(a,b){return a.length - b.length;});
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var todos_arr=[];
   var arr_final=[];
   for (let i in array1){
      if (! todos_arr.includes(array1[i])){
      todos_arr.push(array1[i]);}}
   for (let j in array2){
      if (! todos_arr.includes(array2[j])){
      todos_arr.push(array2[j]);}}
   for (let k in todos_arr){
      if (array1.includes(todos_arr[k])==true && array2.includes(todos_arr[k])==true ){
         arr_final.push(todos_arr[k]);}}
         
   return arr_final;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
