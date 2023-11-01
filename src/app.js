/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generarCarta() {
    //tipo carta random
    let pintas = ["♦", "♥", "♠", "♣"];
    let pintaRandom = pintas[Math.floor(Math.random() * pintas.length)];

    //letra y numero random
    let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
    let numeroRandom = number[Math.floor(Math.random() * number.length)];

    let color =
      pintaRandom == "♥" || pintaRandom == "♦" ? "text-danger" : "";

    //HTML
    document.getElementById(
      "carta-aleatoria"
    ).innerHTML += `<div class=" col container rounded">
    <div class="container text-center text-bg-success p-3 rounded">
        <div class="card" style="width: 10rem; height: 13rem" id="card">
            <div class="card2 ${color}" id="pinta-izq" style="height: 20%"><div class="pintasIzq">${pintaRandom}</div></div>
            <div class="card2 ${color}" id="numero" style="height: 60%"><div class="numeros">${numeroRandom}</div></div>
            <div class="card2 ${color}" id="pinta-der" style="height: 20%"><div class="pintaDer">${pintaRandom}</div></div>
        </div>
    </div>
</div>`;

    let random = [numeroRandom, pintaRandom];

    return random;
  }

  
  let arrCards = [];

  function generarArray() {
    document.getElementById("carta-aleatoria").innerHTML = "";
    arrCards = [];
    let carntidadDeCartas = document.getElementById("cantidad-cartas").value;
    for (let i = 0; i < carntidadDeCartas; i++) {
      let cartaAleatoria = generarCarta();
      arrCards.push(cartaAleatoria);
    }
    console.log(arrCards);
    return arrCards;
  }

  document.getElementById("baraja").addEventListener("click", generarArray);

  

  document.getElementById("ordena").addEventListener("click", function() {
    let wall = arrCards.length - 1; 
    while (wall > 0) {
      let index = 0;

      while (index < wall) {

        if (arrCards[index + 1][0] == "K") {
          arrCards[index + 1][0] = 12;
        } else if (arrCards[index + 1][0] == "Q") {
          arrCards[index + 1][0] = 11;
        } else if (arrCards[index + 1][0] == "J") {
          arrCards[index + 1][0] = 10;
        } else if (arrCards[index + 1][0] == "A") {
          arrCards[index + 1][0] = 1;
        }

        if (arrCards[index][0] == "K") {
          arrCards[index][0] = 12;
        } else if (arrCards[index][0] == "Q") {
          arrCards[index][0] = 11;
        } else if (arrCards[index][0] == "J") {
          arrCards[index][0] = 10;
        } else if (arrCards[index][0] == "A") {
          arrCards[index][0] = 1;
        }
        if (arrCards[index][0] > arrCards[index + 1][0]) {
          let aux = arrCards[index];
          arrCards[index] = arrCards[index + 1];
          arrCards[index + 1] = aux;
        }
        index++;
      }
      wall--; //wall decendente
    }

    console.log(arrCards);
    document.getElementById("carta-aleatoria").innerHTML = "";
    for (let index = 0; index < arrCards.length; index++) {
      let color =
        arrCards[index][1] == "♥" || arrCards[index][1] == "♦"
          ? "text-danger"
          : "";
      if (arrCards[index][0] == 12) {
        arrCards[index][0] = "K";
      } else if (arrCards[index][0] == 11) {
        arrCards[index][0] = "Q";
      } else if (arrCards[index][0] == 10) {
        arrCards[index][0] = "J";
      } else if (arrCards[index][0] == 1) {
        arrCards[index][0] = "A";
      }
      document.getElementById(
        "carta-aleatoria"
      ).innerHTML += `<div class=" col container rounded">
  <div class="container text-center text-bg-success p-3 rounded">
      <div class="card" style="width: 10rem; height: 13rem" id="card">
          <div class="card2 ${color}" id="pinta-izq" style="height: 20%"><div class="pintasIzq">${arrCards[index][1]}</div></div>
          <div class="card2 ${color}" id="numero" style="height: 60%"><div class="numeros">${arrCards[index][0]}</div></div>
          <div class="card2 ${color}" id="pinta-der" style="height: 20%"><div class="pintaDer">${arrCards[index][1]}</div></div>
      </div>
  </div>
</div>`;
    }
    return arrCards;
  });

};