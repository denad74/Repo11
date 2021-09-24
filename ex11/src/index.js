// Only change code below this
function splitArrayInGroups(arr, n){
    var result  = [];
    
    var len = result.length;;
    for(var i = 0; i < arr.length; i++) {
        var last = result[result.length - 1];

        if(len < n*n) {///////////
            

            if(!last || last.length === n) {
                result.push([arr[i]]);
            } else {
                last.push(arr[i]);
            }
           len++; 
        
        } 
        
    }
    return result;

    }

    
// Only change code above this line

console.log(splitArrayInGroups(["a", "b", "c", "d"], 2)); // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2)); // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3)); // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // Change this line

module.exports = splitArrayInGroups;