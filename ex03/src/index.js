// Create a myPetsArray here
var myPetsArray = ["Dog", "Cat"];
// Ende of myPetsArray array

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    // Only change code below this line
    myNewPets.push("Bird", "Fish");
    var firstPet = myNewPets.pop();
    var lastPet = myNewPets.shift();
    myNewPets.unshift("Lion");
    return myNewPets;
    
    // Only change code above this line
}


console.log(myArrayFunction(myPetsArray)); // Change this line
module.exports = myArrayFunction;