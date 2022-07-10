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
// let a = [0,1,2,3,'home@gmail.com']

// if ( a[4].split('@')[1].includes('gmail')){
//    console.log(1)
// }

let mainw = [1,2,4]
for (let a in mainw){
   console.log(a)
}

//  var sorted = quicksort(unsorted);
//  console.log(quicksort(main))


// pagination
// let page = 2
// console.log(main.slice(page*10 -10,page*10))

// select single one
// console.log(main[3-1])

// const some = {
//    name: 'here',
//    car: 'some'
// }

// // read and write

// console.log(JSON.stringify(Object.values(some)))
// let name = JSON.stringify(Object.values(some))
// let so = '\n'+(name.length+1)+','+name.slice(1,name.length-1)

// fs.appendFile("./employees.txt", so, (err) => {
//    if (err) console.log(err);
//    console.log("Successfully Written to File.");
//  });
