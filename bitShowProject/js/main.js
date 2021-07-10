const urlApi = "http://api.tvmaze.com/shows";

$(document).ready(() => {
    showSeries();
}) 

const showSeries = (() => {
    $.ajax({
        url: urlApi,
        method: "GET",
    }).done((respond) => {
        respond.sort((a,b) => {
            return b.rating.average - a.rating.average;
        })
        let showFirst50Series = respond.slice(0,50);

        showFirst50Series.forEach((item) => {
            
            let card = $(`<div class="putShow" style="width: 18rem;" onclick='goToShow(${item.id})'>
            <img src='${item.image.medium}' class="card-img-top" alt="...">
            <div class="cardBody">
              <h5 class="cardTitle">${item.name}</h5>
            </div>
          </div>`);
            containerNode.append(card);

        })
    }).fail(() => {
        alert("Network error");
    })
})