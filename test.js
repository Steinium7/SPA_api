const fs = require('fs')

try {
   var data = fs.readFileSync('./employees.txt', 'utf8');
   data = data.split('\n')
   console.log(data);
} catch (err) {
   console.error(err);
}


let main = data.map(function (entry){
    return entry.split(',')
})

let arr = main.sort((a,b)=>{return a[1]-b[1]})



// pagination
// let page = 2
// console.log(main.slice(page*10 -10,page*10))

// select single one
// console.log(main[3-1])

// const some = {
//    name: 'here',
//    car: 'some'
// }

// read and write

// console.log(JSON.stringify(Object.values(some)))
// let name = JSON.stringify(Object.values(some))
// let so = name.slice(1,name.length-1)+'\n'

// fs.appendFile("./employees.txt", so, (err) => {
//    if (err) console.log(err);
//    console.log("Successfully Written to File.");
//  });
