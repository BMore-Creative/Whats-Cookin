//FOOD RECIPE RESULT LOGIC
const foodBox = document.querySelector("#foodBox");

function getFood(requestURL) {
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // Creates img and anchor elements
            const link = document.createElement('a')
            const img = document.createElement('img')
            const foodID = data.meals[0].idMeal
            const foodResult = 'https://www.themealdb.com/meal/' + foodID
            const foodImg = data.meals[0].strMealThumb
            
            //Sets img to thumbnail from API fetch
            img.src = foodImg;
            //Sets link href and text
            link.textContent = data.meals[0].strMeal;
            link.href = foodResult;

            //Appends img to link text
            //Appends link text to html div
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
            // Creates img and anchor elements
            const link = document.createElement('a')
            const img = document.createElement('img')
            const drinkID = data.drinks[0].idDrink
            const drinkResult = 'https://www.thecocktaildb.com/drink/' + drinkID
            const drinkImg = data.drinks[0].strDrinkThumb

            //Sets img to thumbnail from API fetch
            img.src = drinkImg
            //Sets link href and text            
            link.textContent = data.drinks[0].strDrink
            link.href = drinkResult;
            
            //Appends img to link text
            //Appends link text to html div
            link.appendChild(img);
            drinkBox.appendChild(link);
        });
}

getDrink(requestRandDrink);


// Add the object to storage
localStorage.setItem('answer',answer);

// let quizResult_ =JSON.stringify(answer)

// Retrieve the item from storage
let quizResult = localStorage.getItem('answer');
quizResult

// Reload the page
var startOver = document.getElementById("tryAgain");

startOver.addEventListener("click", function() {
    if(startOver) {
        location.reload();
    };});

//USER INPUT -> RECIPE RESULT LOGIC
userValue = "5"
const errorBox = document.querySelector("#errorBox");

if (userValue === "1") {
    getFood(app1);
} else if (userValue === "2") {
    getFood(app2);    
} else if (userValue === "") {
    getFood(app3);    
} else if (userValue === "") {
    getFood(app4);    
} else if (userValue === "") {
    getFood(app5);    
} else if (userValue === "") {
    getFood(app6);    
} else if (userValue === "") {
    getFood(app7);    
} else if (userValue === "") {
    getFood(app8);    
} else if (userValue === "") {
    getFood(app9);    
} else if (userValue === "") {
    getFood(ent1);    
} else if (userValue === "") {
    getFood(ent2);    
} else if (userValue === "") {
    getFood(ent3);    
} else if (userValue === "") {
    getFood(ent4);    
} else if (userValue === "") {
    getFood(ent5);    
} else if (userValue === "") {
    getFood(ent6);    
} else if (userValue === "") {
    getFood(ent7);    
} else if (userValue === "") {
    getFood(ent8);    
} else if (userValue === "") {
    getFood(ent9);    
} else if (userValue === "") {
    getFood(des1);    
} else if (userValue === "") {
    getFood(des2);    
} else if (userValue === "") {
    getFood(des3);    
} else if (userValue === "") {
    getFood(des4);    
} else if (userValue === "") {
    getFood(des5);    
} else if (userValue === "") {
    getFood(des6);    
} else if (userValue === "") {
    getFood(des7);    
} else if (userValue === "") {
    getFood(des8);    
} else if (userValue === "") {
    getFood(des9);    
} else {
    //Creates p element
    const p = document.createElement('p')
    //Sets p text
    p.textContent = "Option unavailable, please try again"
    //Appends p to html div
    foodBox.appendChild(p);
};
