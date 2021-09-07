const input = $("input");
const errorElement = $(".alert");
const url = "https://api.github.com/search/users?q=a";
const cardHolder = $(".cardHolder");

function search(inputValue) {
    $.ajax({
        url: `${url}${inputValue}`,
        method: "GET"
    }).done(function (response) {
        cardHolder.html("");
        if (!response || !response.items.length){
            errorElement.text("No result");
            errorElement.toggle();
        }
        
        response.items.forEach(function(item){
            var card = $(`<div class='col-4'><div class= 'card'><img src='${item.avatar_url}'><div class='card-body'>
            <h5 class='card-title'> ${item.login}</h5>
            <a href='${item.html_url}' target='_blank' class='btn btn-primary'>Go to profile</a>
            <label href='' onclick="goToRepositories('${item.repos_url}')" class='btn btn-primary'>Read repositories</label>
            </div>
            </div>
            </div>`);
            cardHolder.append(card);
        });
    }).fail(function () {
        errorElement.text("Network error");
        errorElement.toggle();
    })
}

function searchHandler(event) {
    if(event.keyCode == 13){
        let inputValue = input.val();
        input.blur();
        if (!inputValue) {
            errorElement.text("Input is required");
            errorElement.toggle();
            return;
        }
        search(inputValue)
    }

}

function clearInput() {
    input.val("");
    errorElement.text("");
    errorElement.css("display", "none");
}

function goToRepositories(repoUrl) {
    localStorage.setItem("user_repo", repoUrl);
    location.assign("repositories.html");
}

input.on("keydown", searchHandler);
input.on("focus", clearInput);