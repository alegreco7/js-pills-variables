let number = 100;
console.log(number);


const pi = 3.14;
console.log(PI);


// PI = 3.1416;
// console.log (PI);


let radius = 8;

let circle = radius * 2 * PI;
console. log(circle);


let name = "Carlo";
name = "Marco";

// esercizio 4

let greet = "ciao, mondo!";
console.log(greet);

// esercizio 4b

// let greet = "come stai, mondo?";
// console.log(greet);

// esercizio 4c

greet = greet + " Come stai?";
console.log(greet);


// Assegna due numeri a due variabili
let numero1 = 10;
let numero2 = 5;

// Confronta se il primo numero è maggiore del secondo
// let comparison = numero1 > numero2;

console.log(comparison);


// Esercizio 2

// Due stringhe da confrontare
let stringa1 = "Prima Stringa";
let stringa2 = "Seconda Stringa";

// Confronto tra le due stringhe
let comparison = (stringa1 === stringa2);

// Stampa il valore di comparison sulla console
console.log(comparison);


// esercizio 3 //

// Assegna un numero a una variabile
let numero = 42;

// Assegna una stringa che rappresenta un numero a un'altra variabile
let stringaNumero = "42";

// Converte la stringa in un numero
let numeroDaStringa = parseInt(stringaNumero);

// Confronta il numero con il numero ottenuto dalla conversione della stringa
let confronto = numero === numeroDaStringa;

// Stampa il risultato del confronto sulla console
console.log(confronto);

//esercizio1/a

for (let i = 1; i <= 42; i++) {
    console.log(i);
}

//Esercizio 1/B

for (let i = 42; i >= 1; i--) {
    console.log(i);
}


//**Esercizio 1/A** 

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers)

//**Esercizio 1/B**  

const fruits = ["mela", "banana", "pesca", "pera", "albicocca", "mango", "kiwi", "papaya"];
console.log(fruits)


//**Esercizio 1/C**

console.log("Il numero di elementi in fruits è:", fruits.length);



//**Esercizio 2/A**

// Passo 1: Chiedi all'utente un numero intero e memorizzalo nella costante numOfElements
const numOfElements = parseInt(prompt("Inserisci un numero intero:"));

// Passo 2: Crea un array numbers e riempilo con i numeri interi da 1 a numOfElements
const numbers = [];
for (let i = 1; i <= numOfElements; i++) {
    numbers.push(i);
}

// Passo 3: Stampa in console l'array numbers e il numero di elementi di cui si compone
console.log("Array di numeri:", numbers);
console.log("Numero di elementi:", numOfElements);


// ************************ //


//**Esercizio 2/B** 

// Array numbers generato nell'Esercizio 2/A
//const numbers = [/* inserisci qui i numeri generati */];

// Inizializza una variabile per la somma
let sum = 0;

// Itera attraverso gli elementi dell'array e aggiungi ciascun elemento alla somma
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

// Stampa il risultato della somma in console
console.log("La somma di tutti i numeri nell'array è:", sum);

// **Esercizio 2/C**


// Array numbers generato nell'Esercizio 2/A
//const numbers = [/* inserisci qui i numeri generati */];

// Trova il valore massimo utilizzando Math.max e lo spread operator
const maxValue = Math.max(...numbers);

// Stampa il valore massimo in console
console.log("Il valore massimo nell'array è:", maxValue);

// ************************ //

function stampaCiaoMondo() {
    console.log('Ciao Mondo');
  }
  
// ************************ //

function sommaNumeri(numero1, numero2) {
    let somma = numero1 + numero2;
    return somma;
}

// ************************ //

// Definizione della funzione
function sommaNumeri(numero1, numero2) {
    let somma = numero1 + numero2;
    return somma;}
  
// Chiamata alla funzione e assegnazione del risultato a una variabile
let risultatoSomma = sommaNumeri(10, 20);

// Mostrare il risultato
console.log('Il risultato della somma è:', risultatoSomma);
  
// ************************ //

function getOneStringFromTwo(string1, string2) {
    // Unisci le due stringhe con uno spazio e restituisci il risultato
    return `${string1} ${string2}`;
  }
  
  // Esempio di utilizzo della funzione
  //const result = getOneStringFromTwo("Hello", "World");
  console.log(result);  // Stampa: Hello World
  
// ************************ //

// Dichiarazione della funzione
function getOneStringFromTwo(string1, string2) {
    return `${string1} ${string2}`;
  }
  
  // Chiamata della funzione con due stringhe a piacere
  const result = getOneStringFromTwo("Buongiorno", "mondo");
  
  // Stampa del risultato in console
  console.log(result);  // Stampa: Buongiorno mondo

// ************************ //

// Definisci la funzione da eseguire dopo 3 secondi
function mostraMessaggio() {
    alert("Ciao a tutti");
  }
  
  // Imposta il timer con setTimeout
  // Il primo argomento è la funzione da eseguire
  // Il secondo argomento è il periodo di tempo in millisecondi (3 secondi in questo caso)
  setTimeout(mostraMessaggio, 3000);
  
  // ************************ //

  let contatore = 0;

// Definisci la funzione da eseguire ad ogni intervallo
function incrementaContatore() {
  contatore++;
  console.log(contatore);
}

// Imposta l'intervallo con setInterval
// Il primo argomento è la funzione da eseguire
// Il secondo argomento è il periodo di tempo in millisecondi (1000 millisecondi = 1 secondo)
let intervallo = setInterval(incrementaContatore, 1000);

// Puoi fermare l'intervallo dopo un certo numero di secondi (ad esempio, 10 secondi) con un altro setTimeout
setTimeout(function() {
  clearInterval(intervallo); // Ferma l'intervallo
}, 10000);

// ************************ //

let persona = {
  nome: "ale",
  cognome: "greco"
};

// Accesso alle proprietà dell'oggetto persona
console.log("Nome: " + persona.nome);
console.log("Cognome: " + persona.cognome);

// ************************ //

