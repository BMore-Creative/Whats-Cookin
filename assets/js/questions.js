//list of questions and options
var questions = [
    {
        title: "Do you want a(n):",
        options: ["Appetizer", "Entrée", "Dessert"]
    },
    {
        title: "What base would you like your meal to be made with?(APPETIZER/ENTREE ONLY):",
        options: ["Meat", "Carbs", "Vegetable"]
    },    
    {
        title: "What type of dessert would you like?(DESSERT ONLY):",
        options: ["Pastry", "Cake/Pie", "Other"]
    },
    {
        title: "Where do you want your food to come from?:",
        options: ["North/South America", "Europe/Africa", "Asia"]
    }
];

// Populate rows with questions and options. Taking the long road on this for now.
var score = 0;

var questionOne = document.getElementById("question-1");
questionOne.textContent = questions[0].title;
for (var i = 0; i < questions[0].options.length; i++) {
    var option = document.createElement("button");
    option.style.display = "block";
    document.getElementById("question-1").appendChild(option);
    option.textContent = questions[0].options[i];
    option.onclick = function(event) {
        var choice = event.target.textContent;
        if (choice == questions[0].options[2]) {
            score = 50;
            console.log("You have chosen...DESSERT");
        }
        else if (choice == questions[0].options[0]) {
            score = 1;
        }
        else {
            score = 2;
        };
        console.log("You chose " + choice);
        console.log(score);
    };
};

var questionTwo = document.getElementById("question-2");
questionTwo.textContent = questions[1].title;
for (var i = 0; i < questions[1].options.length; i++) {
    var option = document.createElement("button");
    option.style.display = "block";
    option.textContent = questions[1].options[i];
    document.getElementById("question-2").appendChild(option);
    option.onclick = function(event) {
        var choice = event.target.textContent;
        if (choice == questions[1].options[0]) {
            score++;
        }
        else if (choice == questions[1].options[1]) {
            score = score + 2;
        }
        else {
            score = score + 3;
        };
        console.log("You chose " + choice);
        console.log(score);
    };
};

var questionThree = document.getElementById("question-3");
questionThree.textContent = questions[2].title;
for (var i = 0; i < questions[2].options.length; i++) {
    var option = document.createElement("button");
    option.style.display = "block";
    option.textContent = questions[2].options[i];
    document.getElementById("question-3").appendChild(option);
    option.onclick = function(event) {
        var choice = event.target.textContent;
        if (choice == questions[2].options[0]) {
            score++;
        }
        else if (choice == questions[2].options[1]) {
            score = score + 2;
        }
        else {
            score = score + 3;
        };
        console.log("You chose " + choice);
        console.log(score);
    };
};

var questionFour = document.getElementById("question-4");
questionFour.textContent = questions[3].title;
for (var i = 0; i < questions[3].options.length; i++) {
    var option = document.createElement("button");
    option.style.display = "block";
    option.textContent = questions[3].options[i];
    document.getElementById("question-4").appendChild(option);
    option.onclick = function(event) {
        var choice = event.target.textContent;
        if (choice == questions[3].options[0]) {
            score++;
        }
        else if (choice == questions[3].options[1]) {
            score = score + 2;
        }
        else {
            score = score + 3;
        };
        console.log("You chose " + choice);
        console.log(score);
    };
};