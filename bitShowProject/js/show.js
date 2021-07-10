const localStorageInput = localStorage.getItem("id");
const urlShow = "http://api.tvmaze.com/shows/";

$(document).ready(() => {
    showSeriesInfo();
    showSeasons(localStorageInput);
})

const showSeriesInfo = () => {
    $.ajax({
        url: `${urlShow}${localStorageInput}`,
        method: "GET",
    }).done((respond) => {
        let card = $(`<h1 class="mb-5 mt-5 text-center" class="colorWhite" style="color:white">
        ${respond.name}</h1>
        <div class="card mb-3 border-0" style="max-width: 1000px;">
          <div class="row ">
          <div class="col-8">
          <img src="${respond.image.original}" class="img-fluid " alt="...">
          </div>
          <div class="col-4">
           <div class="cardBody">
           <ul class="seasons"></ul>
           <ul class="cast"></ul>
         </div>
         </div>
         </div>
        </div>
        <div class="bgCol"
        ${respond.summary}></div>`);
        
        containerNode.append(card);
    }).fail(() => {
        alert("Network error")
    })
}

const showSeasons = (id) => {
    $.ajax({
        url: `${urlShow}${id}/seasons`,
        method:"GET",
    }).done((respond) => {
        let allSeasons = `<h2> Seasons(${respond.length})</h2>`
        $('.cardBody').prepend(allSeasons);
        respond.forEach((ele) => {
        let seasons = `<li>${ele.premiereDate} - ${ele.endDate}</li>`;
        let imageUrl = `${ele.image.original}`
        $(".bgCol").css("background-color", "white")
        $("body").css("background-image", "url(" + imageUrl + ")");

        $(".seasons").append(seasons);
        

    })
    })
}