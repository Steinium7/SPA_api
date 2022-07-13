const fs = require('fs');

function readFile() {
    let data = fs.readFileSync('../employees.txt', 'utf8');
    return data.split('\n');
}

module.exports = {
    getEmployees: (option: 'all' | 'one' | 'filter', parameter: string) => {
        try {

            let data = readFile()
            interface IObjectKeys {
                [key: string]: string[];
            }

            let main: IObjectKeys = {};

            if (option == 'all') {
                for (let entry of data) {
                    let employee = entry.split(',');
                    main[employee[0]] = employee.slice(1, 3);
                    main[employee[0]].push(employee[5]);
                }
            } else if (option == 'one') {
                let employee = data[parseInt(parameter) - 1].split(',');
                main[employee[0]] = employee.slice(1);
            } else {
                let filterValues: string[][] = [];

                data.forEach(function (a: string) {
                    // console.log(a[5].split('@'));
                    let splitData: string[] = a.split(',');
                    if (splitData[5].split('@')[1].includes(parameter))
                        filterValues.push(splitData);
                });
            }
            return main;
        } catch (err) {
            console.error(err);
            return err;
        }
    },

    createEmployee: (data: Object) => {
        // console.log(data);
        let number = readFile().length

        let dataNew = Object.values(data);
        data = dataNew.map(function (a: string) {
            return a.replace('"', '');
        });

        let entry = `\n${number + 1},${data}`;

        fs.appendFile('./employees.txt', entry, (err: any) => {
            if (err) console.log(err);
            console.log('Successfully Written to File.');
        });
    },
};
