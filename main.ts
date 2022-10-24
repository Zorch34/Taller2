import { Serie } from './Series.js';

import { dataSeries } from './DataSeries.js';

let SeriesTbody: HTMLElement = document.getElementById('Series')!;
const AvgTemporadas: HTMLElement = document.getElementById("AvgTemporadas")!;
let SerieCard: HTMLElement = document.getElementById("SerieCard")!;

renderSeriesInTable(dataSeries);

AvgTemporadas.innerHTML = `${getAvgTemporadas(dataSeries)}`

const idFila: HTMLElement = document.getElementsByName('Fila')[0];
console.log(idFila);

// let SCard :Serie = dataSeries[idFila];
let SCard :Serie = dataSeries[1];
console.log(SCard);

CreateCard(SCard);

function CreateCard(SCard:Serie):void{
  console.log('Creando card');
  let divElement = document.createElement("div");
  divElement.setAttribute("class","card");
  divElement.setAttribute("class","col-sm-4 col-md-4 col-lg-4 col-xl-4");
  divElement.setAttribute("style","width: 30rem");
  divElement.innerHTML =  `<img class="card-img-top" src=${SCard.Foto} alt="Card image cap"> <div class="card-body"> <h5 class="card-title"> ${SCard.Nombre} </h5> <p> ${SCard.Resumen} </p> <a href="#">${SCard.Link}</a> </div> `;
  console.log(divElement);
  SerieCard.appendChild(divElement);     
}
function renderSeriesInTable(Series: Serie[]): void {
    console.clear();
    console.log('Desplegando Series');
    Series.forEach((Serie) => {
      let trElement = document.createElement("tr");
      trElement.setAttribute("id","Serie");
      trElement.setAttribute("onclick","IdSerie(this)")
      trElement.innerHTML = `<td>${Serie.Numero}</td>
                             <td>${Serie.Nombre}</td>
                             <td>${Serie.Canal}</td>
                             <td>${Serie.Temporadas}</td>`;
                             console.log(trElement);
      SeriesTbody.appendChild(trElement);
    });
  }

  
  function getAvgTemporadas( Series:Serie[]): number {
    let AvgTemporadas: number = 0;
    Series.forEach((Serie) => AvgTemporadas = AvgTemporadas + Serie.Temporadas);
    return AvgTemporadas/Series.length;
  }