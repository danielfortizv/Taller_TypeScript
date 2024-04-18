import { Serie } from "./serie.js";

import { dataSeries } from "./data.js";

let seriesTbody: HTMLElement = document.getElementById("series")!;
const averageSeasonsElm: HTMLElement =
  document.getElementById("average-seasons")!;
const cardImagen: HTMLImageElement = document.getElementById(
  "imagen_serie"
) as HTMLImageElement;
const cardTitulo: HTMLElement = document.getElementById("titulo_serie")!;
const cardDescripcion: HTMLElement =
  document.getElementById("descripcion_serie")!;
const cardEnlace: HTMLAnchorElement = document.getElementById(
  "enlace_serie"
) as HTMLAnchorElement;

renderSeriesInTable(dataSeries);

averageSeasonsElm.innerHTML = `${getAverageSeasons(dataSeries)}`;

function renderSeriesInTable(series: Serie[]): void {
  console.log("Desplegando series");
  series.forEach((serie) => {
    let trElement = document.createElement("tr");

    trElement.className = "serie_tabulada";

    trElement.innerHTML = `<td>${serie.indice}</td>
    <td>${serie.name}</td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>`;

    var createClickHandler = function (row: HTMLTableRowElement) {
      return function () {
        cardImagen.src = `${serie.imagen}`;
        cardTitulo.innerHTML = `${serie.name}`;
        cardDescripcion.innerHTML = `${serie.description}`;
        cardEnlace.href = `${serie.enlace}`;
        cardEnlace.innerHTML = `${serie.enlace}`;
      };
    };

    var changeBg = function (row: HTMLTableRowElement) {
      return function () {
        row.style.cursor = `pointer`;
        row.style.backgroundColor = `#d1d1d1`;
      };
    };

    var restoreBg = function (row: HTMLTableRowElement) {
      return function () {
        row.style.cursor = `default`;
        row.style.backgroundColor = `initial`;
      };
    };

    trElement.onclick = createClickHandler(trElement);
    trElement.onmouseenter = changeBg(trElement);
    trElement.onmouseout = restoreBg(trElement);

    seriesTbody.appendChild(trElement);
  });
}

function getAverageSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  let totalSeries: number = 0;
  series.forEach((serie) => {
    totalSeasons += serie.seasons;
    totalSeries += 1;
  });
  return totalSeasons / totalSeries;
}

/*
const seriesTrows: HTMLCollectionOf<HTMLTableRowElement> = document.getElementsByClassName("serie_tabuladaa") as HTMLCollectionOf<HTMLTableRowElement>;

let row0: HTMLTableRowElement = seriesTrows[0] as HTMLTableRowElement;

row0.className = "Este_cambia0";
*/
