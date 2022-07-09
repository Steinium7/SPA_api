let express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/all/:id', (req: any, res: {
    render: any; send: (arg0: string[]) => void; 
})=>{

    try {
       var data = fs.readFileSync('./employees.txt', 'utf8');
       data = data.split('\n')
    //    console.log(data);
    } catch (err) {
       console.error(err);
    }

    let numOfpages = Math.ceil(data.length/10)
    let pageRange = [...Array(numOfpages).keys()]

    let main:string[] = data.map(function (entry:string){
        return entry.split(',').slice(0,3)
    })
    
    res.render('index', {title:"The Express App", message:main,
                paginate:pageRange});
})

router.get('/employee/:id', async (req: any, res:any)=>{
    try {
        var data = fs.readFileSync('./employees.txt', 'utf8');
        data = data.split('\n')
        // console.log(data);
    } catch (err) {
        console.error(err);
    }
 
    let main:string[] = data.map(function (entry:string){
        return entry.split(',')
    })
     
    res.render('employee', {title:"The Express App", message:main[req.params.id-1]})
})


router.post('/create', (req: any, res: any) =>{

    let data = req.body
    data = JSON.stringify(Object.values(data))
    let entry = '\n'+(data.length+1)+','+data.slice(1,data.length-1)

    fs.appendFile("./employees.txt", entry, (err:any) => {
       if (err) console.log(err);
       console.log("Successfully Written to File.");
    });

    res.render('info',{title: "SPA", message:"Successfully Written to File."})
})

module.exports = router;