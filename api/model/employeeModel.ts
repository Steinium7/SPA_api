const fs = require('fs')

module.exports = {

    getEmployees: ()=>{
        try {
            var data = fs.readFileSync('./employees.txt', 'utf8');
            return data.split('\n')
 
        } catch (err) {
            console.error(err);
            return err
        }
    },

    createEmployee: ()=>{
        
    }
}