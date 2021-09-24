// Only change code below this line
var myNestedArray = [["Tablerone", 5]];
function myNestedFunction(arr) {
       
    myNestedArray.push(arr);
    
    return myNestedArray;
}

// Only change code above this line

console.log(myNestedFunction(["Milka", 3])); // Change this line
module.exports = myNestedFunction;
