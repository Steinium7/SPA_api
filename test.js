const fs = require('fs')

try {
   var data = fs.readFileSync('./employees.txt', 'utf8');
   data = data.split('\n')
   // console.log(data);
} catch (err) {
   console.error(err);
}


const main = data.map(function (entry){
    return entry.split(',')
})

let maincopy = main

let arr = maincopy.sort((a, b)=>{return a[1].localeCompare(b[1])})
// console.log(arr)
// console.log(data)

function quicksort(array) {
   if (array.length <= 1) {
     return array;
   }
   // console.log(array[0])
   var pivot = array[0][1];
   
   var left = []; 
   var right = [];
 
   for (var i = 1; i < array.length; i++) {
     array[i][1] < pivot ? left.push(array[i]) : right.push(array[i]);
   }
 
   return quicksort(left).concat(pivot, quicksort(right));
 };
 
 var unsorted = [23, 45, 16, 37, 3, 99, 22];
//  var sorted = quicksort(unsorted);
//  console.log(quicksort(main))


// pagination
// let page = 2
// console.log(main.slice(page*10 -10,page*10))

// select single one
// console.log(main[3-1])

const some = {
   name: 'here',
   car: 'some'
}

// read and write

console.log(JSON.stringify(Object.values(some)))
let name = JSON.stringify(Object.values(some))
let so = '\n'+(name.length+1)+','+name.slice(1,name.length-1)

fs.appendFile("./employees.txt", so, (err) => {
   if (err) console.log(err);
   console.log("Successfully Written to File.");
 });
