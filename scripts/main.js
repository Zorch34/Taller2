import { dataSeries } from './DataSeries.js';
var SeriesTbody = document.getElementById('Series');
var AvgTemporadas = document.getElementById("AvgTemporadas");
var SerieCard = document.getElementById("SerieCard");
renderSeriesInTable(dataSeries);
AvgTemporadas.innerHTML = "" + getAvgTemporadas(dataSeries);
var idFila = document.getElementsByName('Fila')[0];
console.log(idFila);
var SCard = dataSeries[1];
console.log(SCard);
CreateCard(SCard);
function CreateCard(SCard) {
    console.log('Creando card');
    var divElement = document.createElement("div");
    divElement.setAttribute("class", "card");
    divElement.setAttribute("class", "col-sm-4 col-md-4 col-lg-4 col-xl-4");
    divElement.setAttribute("style", "width: 30rem");
    divElement.innerHTML = "<img class=\"card-img-top\" src=" + SCard.Foto + " alt=\"Card image cap\"> <div class=\"card-body\"> <h5 class=\"card-title\"> " + SCard.Nombre + " </h5> <p> " + SCard.Resumen + " </p> <a href=\"#\">" + SCard.Link + "</a> </div> ";
    console.log(divElement);
    SerieCard.appendChild(divElement);
}
function renderSeriesInTable(Series) {
    console.clear();
    console.log('Desplegando Series');
    Series.forEach(function (Serie) {
        var trElement = document.createElement("tr");
        trElement.setAttribute("id", "Serie");
        trElement.setAttribute("onclick", "IdSerie(this)");
        trElement.innerHTML = "<td>" + Serie.Numero + "</td>\n                             <td>" + Serie.Nombre + "</td>\n                             <td>" + Serie.Canal + "</td>\n                             <td>" + Serie.Temporadas + "</td>";
        console.log(trElement);
        SeriesTbody.appendChild(trElement);
    });
}
function getAvgTemporadas(Series) {
    var AvgTemporadas = 0;
    Series.forEach(function (Serie) { return AvgTemporadas = AvgTemporadas + Serie.Temporadas; });
    return AvgTemporadas / Series.length;
}
