const fs = require('fs')

try {
   const data = fs.readFileSync('./employees.txt', 'utf8');
   data = data.split('\n')
   console.log(data);
} catch (err) {
   console.error(err);
}

