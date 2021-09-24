// Create a monitorsListArray here
var monitorsListArray = ["Apple", "Peach", "Berry"];
// End of monitorsListArray 

function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    // Only change code below this line
    var monitorList = [];
    
    for(var i = 0; i < newMonitorsList.length; i++) {
        partList = [];
        partList.push(newMonitorsList[i]);
        partList.push(i + partList.length);
        monitorList.push(partList);
    }
    return monitorList;
    // Only change code above this line
}

console.log(myMonitorsFunction(monitorsListArray)); // Change this line
module.exports = myMonitorsFunction;