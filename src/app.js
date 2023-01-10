/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let drawBtn = document.getElementById("drawValue");
  let sortBtn = document.getElementById("sortValue");
  drawBtn.addEventListener("click", function() {
    document.getElementById("cartas-shuffle").innerHTML = "";
    // Arrays contenedores de palo y número
    let palo = ["♧", "♤", "♡", "♢"];
    let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

    // Variable que guarda en su contenido el número ingresado por el usuario
    let valorObtenido = document.getElementById("usuario-select").value;
    // //  Bucle que posibilita la copia automática de cartas
    let contenedor = [];

    for (let i = 1; i <= valorObtenido; i++) {
      // Generados aleatorios de posición
      let sortPalo = Math.floor(Math.random() * palo.length);
      let sortNumber = Math.floor(Math.random() * number.length);

      // Contenedor de sort palo y number
      let contenedorNumber = number[sortNumber];
      let contenedorPalo = palo[sortPalo];

      if (contenedorPalo === "♡" || contenedorPalo === "♢") {
        document.getElementById(
          "cartas-shuffle"
        ).innerHTML += `<div id="cartas-shuffle">
                        <div class="card naipe m-3">
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item border-0 text-danger">${contenedorPalo}</li>
                              <li class="list-group-item border-0 text-center text-danger">${contenedorNumber}</li>
                              <li class="list-group-item border-0 text-danger abajo">${contenedorPalo}</li>
                            </ul>
                          </div>
                    </div>`;
      } else {
        document.getElementById(
          "cartas-shuffle"
        ).innerHTML += `<div id="cartas-shuffle">
                        <div class="card naipe m-3">
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item border-0">${contenedorPalo}</li>
                              <li class="list-group-item border-0 text-center">${contenedorNumber}</li>
                              <li class="list-group-item border-0 abajo">${contenedorPalo}</li>
                            </ul>
                          </div>
                    </div>`;
      }
      contenedor.push(contenedorNumber + contenedorPalo);
      console.log(contenedor);
    }

    const bubbleSort = arr => {
      let wall = arr.length - 1;
      while (wall > 0) {
        let index = 0;
        while (index < wall) {
          if (arr[index] > arr[index + 1]) {
            let aux = arr[index];
            arr[index] = arr[index + 1];
            arr[index + 1] = aux;
          }
          index++;
        }
        wall--;
      }
      return arr;
    };

    sortBtn.addEventListener("click", function() {
      document.getElementById("cartas-sort").innerHTML = "";
      let ordenado = bubbleSort(contenedor);
      for (let i = 1; i <= contenedor.length; i++) {
        let cosoTexto = ordenado[i - 1];
        let array = cosoTexto.split("");

        if (array[1] === "♡" || array[1] === "♢") {
          document.getElementById(
            "cartas-sort"
          ).innerHTML += `<div id="cartas-shuffle">
                            <div id="naipeColoreado" class="card naipe m-3">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item border-0 text-danger">${array[1]}</li>
                                  <li class="list-group-item border-0 text-danger text-center">${array[0]}</li>
                                  <li class="list-group-item border-0 text-danger abajo">${array[1]}</li>
                                </ul>
                              </div>
                        </div>`;
        } else {
          document.getElementById(
            "cartas-sort"
          ).innerHTML += `<div id="cartas-shuffle">
                          <div id="naipeColoreado" class="card naipe m-3">
                              <ul class="list-group list-group-flush">
                                <li class="list-group-item border-0">${array[1]}</li>
                                <li class="list-group-item border-0 text-center">${array[0]}</li>
                                <li class="list-group-item border-0 abajo">${array[1]}</li>
                              </ul>
                            </div>
                      </div>`;
        }
      }
    });
  });
};
