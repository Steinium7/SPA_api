// const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/all', (req: any, res: {
    render: any; send: (arg0: string[]) => void; 
})=>{

    try {
       var data = fs.readFileSync('./employees.txt', 'utf8');
       data = data.split('\n')
       console.log(data);
    } catch (err) {
       console.error(err);
    }

    let main:string[] = data.map(function (entry:string){
        return entry.split(',').slice(0,3)
    })
    
    res.render('index', {title:"The Express App", message:main});
})

router.get('/:id', async (req: any, res:any)=>{
    try {
        var data = fs.readFileSync('./employees.txt', 'utf8');
        data = data.split('\n')
        console.log(data);
    } catch (err) {
        console.error(err);
    }
 
    let main:string[] = data.map(function (entry:string){
        return entry.split(',')
    })
     
    res.send(main[req.params.id-1])
})

router.post('/create', (req: any, res: any) =>{

    const data = req.body
    
})

