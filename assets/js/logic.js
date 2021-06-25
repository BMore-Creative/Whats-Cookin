const requestIngredient = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'
const requestCatagories = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
const requestArea = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list'

function getApi(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();            
        })
        .then(function (data) {
            console.log(data);
        });
};

// getApi(requestArea);
// getApi(requestCatagories);
// getApi(requestIngredient);

//FOOD RECIPE RESULTS
const foodBox = document.querySelector("#foodBox");

function getFood(requestURL) {
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            const link = document.createElement('a')
            const img = document.createElement('img')
            const foodID = data.meals[0].idMeal
            const foodResult = 'https://www.themealdb.com/meal/' + foodID
            const foodImg = data.meals[0].strMealThumb
            
            img.src = foodImg;

            link.textContent = data.meals[0].strMeal;
            link.href = foodResult;

            link.appendChild(img);
            foodBox.appendChild(link);
        });
}


//RANDOMZIED DRINK CHOICE LOGIC
const requestRandDrink = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
const drinkBox = document.querySelector("#drinkBox");


function getDrink(requestURL) {
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            const link = document.createElement('a')
            const img = document.createElement('img')
            const drinkID = data.drinks[0].idDrink
            const drinkResult = 'https://www.thecocktaildb.com/drink/' + drinkID
            const drinkImg = data.drinks[0].strDrinkThumb

            img.src = drinkImg
            
            link.textContent = data.drinks[0].strDrink
            link.href = drinkResult;


            link.appendChild(img);
            drinkBox.appendChild(link);
        });
}

getDrink(requestRandDrink);
getFood(app1);