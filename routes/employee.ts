let express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/all/:page', (req: any, res: {
    render: any; send: (arg0: string[]) => void; 
})=>{

    try {
       var data = fs.readFileSync('./employees.txt', 'utf8');
       data = data.split('\n')
    //    console.log(data);
    } catch (err) {
       console.error(err);
    }
    let page = req.params.page

    let numOfpages = Math.ceil(data.length/10)
    let pageRange = [...Array(numOfpages).keys()].map(function (n:number){
        return n+1
    })

    let main:string[] = data.map(function (entry:string){
        return entry.split(',').slice(0,3)
    })
    
    res.render('index', {title:"The Express App", message:main.slice(page*10 -10,page*10),
                paginate:pageRange});
})


router.get('/all', (req: any, res: {
    render: any; send: (arg0: string[]) => void; 
})=>{

    try {
       var data = fs.readFileSync('./employees.txt', 'utf8');
       data = data.split('\n')
    //    console.log(data);
    } catch (err) {
       console.error(err);
    }
    let page = req.params.page ? req.params.page : 1

    let numOfpages = Math.ceil(data.length/10)
    let pageRange = [...Array(numOfpages).keys()].map(function (n:number){
        return n+1
    })

    let main:string[] = data.map(function (entry:string){
        return entry.split(',').slice(0,3)
    })
    
    res.render('index', {title:"SPA", message:main.slice(page*10 -10,page*10),
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
     
    res.render('employee', {title:"SPA", message:main[req.params.id-1]})
})


router.post('/create', (req: any, res: any) =>{

    try {
       var food = fs.readFileSync('./employees.txt', 'utf8');
       food = food.split('\n')
     //    console.log(data);
    } catch (err) {
        console.error(err);
    }
 
    let data = req.body
    console.log(data)
    // data = JSON.stringify(Object.values(data))
    data = Object.values(data)
    data = data.map(function (a:string) {
        return a.replace('"','')
    })
    // console.log(data)

    let entry =`\n${(food.length+1)}, ${data}`
    console.log(entry)

    fs.appendFile("./employees.txt", entry, (err:any) => {
       if (err) console.log(err);
       console.log("Successfully Written to File.");
    });

    res.render('info',{title: "SPA", message:"Successfully Written to File."})
})

router.get('/create', (req: any, res: any) =>{
    res.render('create')
})

router.post('/filter', (req:any, res:any)=>{

    let searchWord = req.body.filter
    try {
        var food = fs.readFileSync('./employees.txt', 'utf8');
        food = food.split('\n')
      //    console.log(data);
    } catch (err) {
        console.error(err);
    }

    let main:string[] = food.map(function (entry:string){
        return entry.split(',')
    })

    let filterValues:string[] = []

    main.forEach(function (a) {
        console.log(a[5].split('@'))
        if (a[5].split('@')[1].includes(searchWord))
            filterValues.push(a)
    })


    res.render('index', {title:"The Express App", message:filterValues,
        paginate:0})
})

module.exports = router;