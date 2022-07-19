const employeeModel = require('../model/employeeModel');

module.exports = {
    getAll: (req: any, res: any) => {
        let data = employeeModel.getEmployees('all');
        if (data instanceof Error)
            return res.send({ err: 'There is an Error' });

        res.send(data);
    },

    getOne: (req: any, res: any) => {
        let data = employeeModel.getEmployees('one', req.params.id);
        if (data instanceof Error)
            return res.send({ err: 'There is an Error' });

        res.send(data);
    },

    createEmployee: (req: any, res: any) => {
        let data = employeeModel.createEmployee(req.body);
        if (!data) return res.sendStatus(200);
        res.sendStatus(500);
    },

    filter: (req: any, res: any) => {
        let data = employeeModel.getEmployees('filter', req.body.filter);
        if (data instanceof Error)
            return res.send({ err: 'There is an Error' });

        res.send(data);
    },

    fileUpload: (req: any, res: any) => {
        console.log(req.body)
        res.json({ file: req.file });
    },
};
