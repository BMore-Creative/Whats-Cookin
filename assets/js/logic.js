//DOM element variables
const drinkBox = document.querySelector("#drinkBox");
const foodBox = document.querySelector("#foodBox");
const titleOne = document.querySelector("#title-1");
const questionOne = document.querySelector("#question-1");
const titleTwo = document.querySelector("#title-2");
const questionTwo = document.querySelector("#question-2");
const titleThree = document.querySelector("#title-3");
const questionThree = document.querySelector("#question-3");
const titleFour = document.querySelector("#title-4");
const questionFour = document.getElementById("question-4");
const lastDrink = document.querySelector("#lastDrink");
const lastFood = document.querySelector("#lastFood");
const errorBox = document.querySelector("#errorBox");
const submitAnswers = document.querySelector("#submit");

let score = 0;

//RANDOMZIED DRINK CHOICE LOGIC
const requestRandDrink =
  "https://www.thecocktaildb.com/api/json/v1/1/random.php";

function getDrink(requestURL) {
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // Creates img and anchor elements
      const link = document.createElement("a");
      const img = document.createElement("img");
      const drinkID = data.drinks[0].idDrink;
      const drinkResult = "https://www.thecocktaildb.com/drink/" + drinkID;
      const drinkImg = data.drinks[0].strDrinkThumb;
      const drinkName = data.drinks[0].strDrink;

      //Sets img to thumbnail from API fetch
      img.src = drinkImg;
      //Sets link href and text
      link.textContent = drinkName;
      link.href = drinkResult;

      //Appends img to link text
      //Appends link text to html div
      link.appendChild(img);
      drinkBox.appendChild(link);
      //Saves most recent drink API information to localStorage
      const drinkRecipe = [];
      drinkRecipe[0] = drinkID;
      drinkRecipe[1] = drinkName;
      drinkRecipe[2] = drinkImg;
      localStorage.setItem("drinkRecipe", JSON.stringify(drinkRecipe));
      console.log(localStorage);
    });
}

//FOOD RECIPE RESULT LOGIC
function getFood(requestURL) {
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // Creates img and anchor elements
      const link = document.createElement("a");
      const img = document.createElement("img");
      const foodID = data.meals[0].idMeal;
      const foodResult = "https://www.themealdb.com/meal/" + foodID;
      const foodImg = data.meals[0].strMealThumb;
      const foodName = data.meals[0].strMeal;

      //Sets img to thumbnail from API fetch
      img.src = foodImg;
      //Sets link href and text
      link.textContent = data.meals[0].strMeal;
      link.href = foodResult;

      //Appends img to link text
      //Appends link text to html div
      link.appendChild(img);
      foodBox.appendChild(link);

      const foodRecipe = [];
      foodRecipe[0] = foodID;
      foodRecipe[1] = foodName;
      foodRecipe[2] = foodImg;
      localStorage.setItem("foodRecipe", JSON.stringify(foodRecipe));
      console.log(localStorage);
    });
}

//QUESTION 1
titleOne.textContent = questions[0].title;
for (let i = 0; i < questions[0].options.length; i++) {
  const option = document.createElement("button");
  option.classList.add("optionOne", "button", "is-link");
  questionOne.appendChild(option);
  option.textContent = questions[0].options[i];
  option.onclick = function (event) {
    const choice = event.target.textContent;
    if (choice == questions[0].options[0]) {
      score = score + 100;
    } else if (choice == questions[0].options[1]) {
      score = score + 200;
    } else {
      score = score + 300;
    }

    const optionOneButtons = document.querySelectorAll(".optionOne");
    optionOneButtons.forEach(function (button) {
      if (button.textContent !== choice) {
        button.disabled = true;
      } else {
        button.onclick = null;
      }
    });
  };
}

//QUESTION 2
titleTwo.textContent = questions[1].title;
for (let i = 0; i < questions[1].options.length; i++) {
  const option = document.createElement("button");
  option.classList.add("optionTwo", "button", "is-link");
  option.textContent = questions[1].options[i];
  questionTwo.appendChild(option);
  option.onclick = function (event) {
    const choice = event.target.textContent;
    if (choice == questions[1].options[0]) {
      score = score + 10;
    } else if (choice == questions[1].options[1]) {
      score = score + 20;
    } else {
      score = score + 30;
    }

    const optionTwoBtns = document.querySelectorAll(".optionTwo");
    optionTwoBtns.forEach(function (button) {
      if (button.textContent !== choice) {
        button.disabled = true;
      } else {
        button.onclick = null;
      }
    });
  };
}

//QUESTION 3
titleThree.textContent = questions[2].title;
for (let i = 0; i < questions[2].options.length; i++) {
  const option = document.createElement("button");
  option.classList.add("optionThree", "button", "is-link");
  option.textContent = questions[2].options[i];
  questionThree.appendChild(option);
  option.onclick = function (event) {
    var choice = event.target.textContent;
    if (choice == questions[2].options[0]) {
      score = score + 40;
    } else if (choice == questions[2].options[1]) {
      score = score + 50;
    } else {
      score = score + 60;
    }

    const optionThreeBtns = document.querySelectorAll(".optionThree");
    optionThreeBtns.forEach(function (button) {
      if (button.textContent !== choice) {
        button.disabled = true;
      } else {
        button.onclick = null;
      }
    });
  };
}
titleFour.textContent = questions[3].title;
for (let i = 0; i < questions[3].options.length; i++) {
  const option = document.createElement("button");
  option.classList.add("optionFour", "button", "is-link");
  option.textContent = questions[3].options[i];
  questionFour.appendChild(option);
  option.onclick = function (event) {
    const choice = event.target.textContent;
    if (choice == questions[3].options[0]) {
      score++;
    } else if (choice == questions[3].options[1]) {
      score = score + 2;
    } else {
      score = score + 3;
    }

    const optionFourBtns = document.querySelectorAll(".optionFour");
    optionFourBtns.forEach(function (button) {
      if (button.textContent !== choice) {
        button.disabled = true;
      } else {
        button.onclick = null;
      }
    });
  };
}

//LOCAL STORAGE
const lastDrinkRecipe = JSON.parse(localStorage.getItem("drinkRecipe"));
function addDrinkHistory() {
  const link = document.createElement("a");
  const img = document.createElement("img");
  const drinkID = lastDrinkRecipe[0];
  const drinkResult = "https://www.thecocktaildb.com/drink/" + drinkID;
  const drinkName = lastDrinkRecipe[1];
  const drinkImg = lastDrinkRecipe[2];

  // Sets img to thumbnail from API fetch
  img.src = drinkImg;
  // Sets link href and text
  link.textContent = drinkName;
  link.href = drinkResult;

  //Appends img to link text
  //Appends link text to html div
  link.appendChild(img);
  lastDrink.appendChild(link);
}
const lastFoodRecipe = JSON.parse(localStorage.getItem("foodRecipe"));
function addFoodHistory() {
  const link = document.createElement("a");
  const img = document.createElement("img");
  const foodID = lastFoodRecipe[0];
  const foodResult = "https://www.themealdb.com/meal/" + foodID;
  const foodName = lastFoodRecipe[1];
  const foodImg = lastFoodRecipe[2];

  //Sets img to thumbnail from API fetch
  img.src = foodImg;
  //Sets link href and text
  link.textContent = foodName;
  link.href = foodResult;

  //Appends img to link text
  //Appends link text to html div
  link.appendChild(img);
  lastFood.appendChild(link);
}

//USER INPUT -> RECIPE RESULT LOGIC
submitAnswers.addEventListener("click", function () {
  if (score === 111) {
    getFood(app1);
  } else if (score === 112) {
    getFood(app2);
  } else if (score === 113) {
    getFood(app3);
  } else if (score === 121) {
    getFood(app4);
  } else if (score === 122) {
    getFood(app5);
  } else if (score === 123) {
    getFood(app6);
  } else if (score === 131) {
    getFood(app7);
  } else if (score === 132) {
    getFood(app8);
  } else if (score === 133) {
    getFood(app9);
  } else if (score === 211) {
    getFood(ent1);
  } else if (score === 212) {
    getFood(ent2);
  } else if (score === 213) {
    getFood(ent3);
  } else if (score === 221) {
    getFood(ent4);
  } else if (score === 222) {
    getFood(ent5);
  } else if (score === 223) {
    getFood(ent6);
  } else if (score === 231) {
    getFood(ent7);
  } else if (score === 232) {
    getFood(ent8);
  } else if (score === 233) {
    getFood(ent9);
  } else if (score === 341) {
    getFood(des1);
  } else if (score === 342) {
    getFood(des2);
  } else if (score === 343) {
    getFood(des3);
  } else if (score === 351) {
    getFood(des4);
  } else if (score === 352) {
    getFood(des5);
  } else if (score === 353) {
    getFood(des6);
  } else if (score === 361) {
    getFood(des7);
  } else if (score === 362) {
    getFood(des8);
  } else if (score === 363) {
    getFood(des9);
  } else {
    //Creates h2 element
    const h2 = document.createElement("h2");
    //Sets h2 text
    h2.textContent = "Option unavailable, please try again";
    //Appends h2 to html div
    foodBox.appendChild(h2);
  }
  getDrink(requestRandDrink);
});

// Reload the page
const resetBtn = document.querySelector("#tryAgain");

resetBtn.addEventListener("click", function () {
    location.reload();
});

addDrinkHistory();
addFoodHistory();
