// Only change code below this line
function myMutation(arr) {
    var firstValue = arr[0].toLowerCase();
    var secondValue = arr[1].toLowerCase();
    
    for(var i = 0; i < secondValue.length; i++){
       if(firstValue.indexOf(secondValue[i]) === -1) 
       return false
    }
    return true
}
// Only change code above this line

console.log(myMutation(["hello", "hey"])); // Change this line
console.log(myMutation(["hello", "hello"])); // Change this line
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // Change this line
console.log(myMutation(["Mary", "Army"])); // Change this line
console.log(myMutation(["Mary", "Aarmy"])); // Change this line
console.log(myMutation(["Alien", "line"])); // Change this line
console.log(myMutation(["floor", "for"])); // Change this line
console.log(myMutation(["hello", "neo"])); // Change this line
console.log(myMutation(["voodoo", "no"])); // Change this line
console.log(myMutation(["ate", "date"])); // Change this line
console.log(myMutation(["Tiger", "Zebra"])); // Change this line
console.log(myMutation(["Noel", "Ole"])); // Change this line
module.exports = myMutation;