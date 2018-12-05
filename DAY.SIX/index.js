function calculate(myLocation, myLocation2, myLocation3) {
    var myName = "This is Stackup, at " + myLocation + ", " + myLocation2 + ", " + myLocation3;
    console.log(myName);
}

calculate ("One North", "JTC Launchpad", "Singapore");

function getMyFullName() {
    var firstName = "Stackup";
    var secondName= "One North";
    var fullName = firstName + " " + secondName;
    return fullName;

}

var myFullName = getMyFullName();
console.log(myFullName);



function greet(firstName, lastName, bornYear) {
    var age = 2018 - bornYear;
    var greetings = "Hello, " + firstName + " " + lastName + ", " + age
    console.log(greetings);
}

greet("Michael", "Jordan", 1988);
greet("Lionel", "Messi", 1986);
greet("Justin", "Bieber", 1902);

function testMe () {
    alert("Hi, you hit the button >_<");
    
}