/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). If an item cannot
be found, add the new item and quantity into the inventory array. The returned inventory array should be 
in alphabetical order by item.

*/


function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  var topush = [];
  for(var i = 0; i<arr2.length; i++){
    var k=-1;
    for (var j =0; j<arr1.length; j++){
      if(arr2[i][1] === arr1[j][1]){
          arr1[j][0] += arr2[i][0];
          k = 0;
          break;
      }
    }
    if(k === -1){
       topush.push(i);
    }
  }
  
  for(var m = 0; m< topush.length; m++){
    arr1.push(arr2[topush[m]]);
  }
  
  arr1.sort(function (a, b) {
        if (a[1] > b[1]) {
            return 1;
        }
        if (a[1] < b[1]) {
            return -1;
        }
        return 0;
  });
  return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
