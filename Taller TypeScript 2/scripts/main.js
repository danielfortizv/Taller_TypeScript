import { dataSeries } from "./data.js";
var seriesTbody = document.getElementById("series");
var averageSeasonsElm = document.getElementById("average-seasons");
var cardImagen = document.getElementById("imagen_serie");
var cardTitulo = document.getElementById("titulo_serie");
var cardDescripcion = document.getElementById("descripcion_serie");
var cardEnlace = document.getElementById("enlace_serie");
renderSeriesInTable(dataSeries);
averageSeasonsElm.innerHTML = "".concat(getAverageSeasons(dataSeries));
function renderSeriesInTable(series) {
  console.log("Desplegando series");
  series.forEach(function (serie) {
    var trElement = document.createElement("tr");
    trElement.className = "serie_tabulada";
    trElement.innerHTML = "<td>"
      .concat(serie.indice, "</td>\n    <td>")
      .concat(serie.name, "</td>\n    <td>")
      .concat(serie.channel, "</td>\n    <td>")
      .concat(serie.seasons, "</td>");
    var createClickHandler = function (row) {
      return function () {
        cardImagen.src = "".concat(serie.imagen);
        cardTitulo.innerHTML = "".concat(serie.name);
        cardDescripcion.innerHTML = "".concat(serie.description);
        cardEnlace.href = "".concat(serie.enlace);
        cardEnlace.innerHTML = "".concat(serie.enlace);
      };
    };
    var changeBg = function (row) {
      return function () {
        row.style.cursor = "pointer";
        row.style.backgroundColor = "#d1d1d1";
      };
    };
    var restoreBg = function (row) {
      return function () {
        row.style.cursor = "default";
        row.style.backgroundColor = "initial";
      };
    };
    trElement.onclick = createClickHandler(trElement);
    trElement.onmouseenter = changeBg(trElement);
    trElement.onmouseout = restoreBg(trElement);
    seriesTbody.appendChild(trElement);
  });
}
function getAverageSeasons(series) {
  var totalSeasons = 0;
  var totalSeries = 0;
  series.forEach(function (serie) {
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
