//to get value of html element
//document.getElementById("firstNumber").value;

//document.getElementById("secondNumber").value;//

//to display value://
//document.getElementById("result").value = "";//


function calculate(){

    var firstNumber;
    var secondNumber;
    var totalNumber;
    var operator;

    firstNumber = document.getElementById("firstNumber").value;
    secondNumber = document.getElementById("secondNumber").value;
    operator = document.getElementById("operator").value;
    
    if(operator == "+"){
        totalNumber = parseInt(firstNumber) + parseInt(secondNumber);
    }
    
    else if(operator == "-"){
        totalNumber = parseInt(firstNumber) - parseInt(secondNumber);
    }
    
    else if (operator == "/"){
        totalNumber = parseInt(firstNumber) / parseInt(secondNumber);
    }
    
    else{
        totalNumber = parseInt(firstNumber) * parseInt(secondNumber);
       
    }

    document.getElementById("result").value = totalNumber;

};


//morning
//afternoon
//evening

var greet;


if(greet == "morning"){
    console.log("Good Morning, Mate!");
}

else if(greet == "afternoon"){
    console.log("Good Afternoon, Mate!");
}

else if (greet == "evening"){
    console.log("Good Evening, Mate!");
}

else{
    console.log("Good night, time to sleep, Mate!");
}

//we're doing an array
var greetings = ["Morning", "Afternoon", "Evening"];
console.log(greetings);
console.log(greetings.length);

console.log(greetings[0]);

var primeNumber = [1, 3, 5, 7, 9, 12, 15];
console.log(primeNumber[primeNumber.length - 1]);
console.log(primeNumber[6]);

//we're doing a loop now
var step = 0;

while(step < primeNumber.length){
    console.log(primeNumber[step]);
    step = step + 1;
}


//if even number --> print "Even Number"
//else --> print "Odd Number"


var numbers = [1,2,3,4,5,6,7,8,9,10];


while(step < numbers.length ){
    
    var isEven = numbers[step] % 2;

    if (isEven == 0) {
        console.log(numbers[step] + " is an Even Number.");

    }

    else {
        console.log(numbers[step] + " is an Odd Number.");
    }

    step = step + 1;


}


    


