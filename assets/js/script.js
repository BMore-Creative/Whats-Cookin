const requestCatagories = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'

function getApi(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();            
        })
        .then(function (data) {
            console.log(data);
        });
}

getApi(requestCatagories);