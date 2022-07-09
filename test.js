const fs = require('fs')

try {
   var data = fs.readFileSync('./employees.txt', 'utf8');
   data = data.split('\n')
   console.log(data);
} catch (err) {
   console.error(err);
}


let main = data.map(function (entry){
    return entry.split(',').slice(0,3)
})

console.log(main)