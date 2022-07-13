const employeeModel = require('../model/employeeModel');

module.exports = {
    getAll: (req: any, res: any) => {
        let data = employeeModel.getEmployees('all');
        if (data instanceof Error)
            res.send({ err: 'There is an Error' });

        res.send(data);
    },

    getOne: (req: any, res: any) => {
        // Rewrite section ------------------

        let data = employeeModel.getEmployees('one', req.params.id);
        if (data instanceof Error)
        res.send({ err: 'There is an Error' });

        res.send(data)

    },

    createEmployee: (req: any, res: any) => {
        let food = employeeModel.getEmployees();

        console.log(entry);

        // Rewrite section ----------


        // res.render('info',{title: "SPA", message:"Successfully Written to File."})
    },

    filter: (req: any, res: any) => {
        // rewrite section -----
        let searchWord = req.body.filter;

        let data = employeeModel.getEmployees();

        let main: string[] = data.map(function (entry: string) {
            return entry.split(',');
        });


        // res.render('index', {title:"The Express App", message:filterValues,
        //     paginate:0})
    },
};
