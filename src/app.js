/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let palo = ["♣", "♠", "♥", "♦"];
  let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  let sorteoPalo = Math.floor(Math.random() * palo.length);
  let sorteoNumber = Math.floor(Math.random() * number.length);

  let contenedorNumber = number[sorteoNumber];
  let contenedorPalo = palo[sorteoPalo];

  let color = contenedorPalo == "♦" || contenedorPalo == "♥" ? "red" : "black";

  // document.getElementById("arriba").innerHTML = contenedorPalo;
  // document.getElementById("arriba").style.color = color;
  // document.getElementById("medio").innerHTML = contenedorNumber;
  // document.getElementById("medio").style.color = color;
  // document.getElementById("abajo").innerHTML = contenedorPalo;
  // document.getElementById("abajo").style.color = color;

  for (let i = 1; i <= 3; i++) {
    document.body.innerHTML += `<section>
    <div class="container">
      <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4">
          <div class="card margin-top card-height" style="width: 18rem;">
            <div class="card-header border-bottom-0">
              <h4 id="arriba">${contenedorPalo}</h4>
            </div>
            <div
              class="card-body d-flex align-items-center justify-content-center"
            >
              <h1 id="medio">${contenedorNumber}</h1>
            </div>
            <div class="card-footer d-flex flex-row-reverse border-top-0">
              <h4 id="abajo">${contenedorPalo}</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4"></div>
      </div>
    </div>
  </section>`;
  }
};

// for (let i = 1; i <= 3; i++) {
//   document.body.innerHTML += `<div class="card" style="width: 18rem;">
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item" id="top">${palos[indexPalo]}</li>
//     <li class="list-group-item" id="number">${numeros[indexNumero]}</li>
//     <li class="list-group-item" id="bottom">${palos[indexPalo]}</li>
//   </ul>
// </div>`;
// }

// funciones a crear
// carta random
// dibujar cartas
