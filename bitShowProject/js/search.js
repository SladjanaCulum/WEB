
const url = "http://api.tvmaze.com/search/shows?q=";
const input = $("input");
const containerNode = $(".container");

const searchSeries = ((input) => {
    $.ajax({
        url: `${url}${input}`,
        method: "GET",
    }).done((respond) => {
        containerNode.html("");
        respond.forEach((item) => {
            let card = $(`<div class="putShow" onclick:"goToShow(${item.show.id})">
            <img src="${item.show.image.medium}" class="card-img-top" alt="series">
            <div class="cardBody">
             <h5 class="cardTitle">${item.show.name}></h5>
            </div>
            </div>`);
            containerNode.append(card);
        })
    }).fail(() => {
        alert("Network error")
    })
})

const eventHendler = (event) => {
    if(event.keyCode == 13) {
        let inputVal = input.val();
        input.blur();
        if(!inputVal) {
            alert("Input required");
        }
        search(inputVal);
    }
}
const goToShow = (item) => {
    localStorage.setItem("id", item);
    location.assign("showInfoSeries.html")
}


input.on("keydown", eventHendler);

input.keyup(() => {
    const inputVal = input.val();

    $.ajax({
        url: `${url}${inputVal}`,
        method: "GET",
    }).done((respond) => {
        $("#searchList").text("");
        for(let i = 0; i < 10; i++){
            if(respond[i] !== undefined){
                let searchListItem = $(`<li onclick='goToShow(${respond[i].show.id})'>${respond[i].show.name}</li>`)
                $("#putSearch").append(searchListItem);
            }else {
                if($("#putSearch").children().length === 0 ){
                    let searchListItem = $(`<li>No result</li>`)
                    $("#putSearch").append(searchListItem);
                    break;
                }
            }
        }
    })
})


