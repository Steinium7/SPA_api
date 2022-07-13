const employeeModel = require('../model/employeeModel')

module.exports = {

    getAll:  (req: any, res: any)=>{
    
            // Rewrite section ---------------
        
        let data = employeeModel.getEmployees()
    
        let main:string[] = data.map(function (entry:string){
            return entry.split(',').slice(0,3)
        })

        res.send
    },
    
    getOne: (req: any, res: any)=>{

        // Rewrite section ------------------
        let data = employeeModel.getEmployees()

        let main:string[] = data.map(function (entry:string){
            return entry.split(',')
        })
         
        // res.render('employee', {title:"SPA", message:main[req.params.id-1]})
    },

    createEmployee: (req: any, res: any) =>{

        try {
           var food = fs.readFileSync('./employees.txt', 'utf8');
           food = food.split('\n')
        } catch (err) {
            console.error(err);
        }
     
        let data = req.body
        console.log(data)
        data = Object.values(data)
        data = data.map(function (a:string) {
            return a.replace('"','')
        })
    
        let entry =`\n${(food.length+1)},${data}`
        console.log(entry)

    // Rewrite section ----------
        fs.appendFile("./employees.txt", entry, (err:any) => {
           if (err) console.log(err);
           console.log("Successfully Written to File.");
        });
    
        // res.render('info',{title: "SPA", message:"Successfully Written to File."})
    },

    filter: (req:any, res:any)=>{

        // rewrite section -----
        let searchWord = req.body.filter
        
        let data = employeeModel.getEmployees()

        let main:string[] = data.map(function (entry:string){
            return entry.split(',')
        })
    
        let filterValues:string[] = []
    
        main.forEach(function (a) {
            console.log(a[5].split('@'))
            if (a[5].split('@')[1].includes(searchWord))
                filterValues.push(a)
        })
        // res.render('index', {title:"The Express App", message:filterValues,
        //     paginate:0})
    }
}