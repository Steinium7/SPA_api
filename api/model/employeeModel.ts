const fs = require('fs');

function readFile() {
    let data = fs.readFileSync('./employees.txt', 'utf8');
    return data.split('\n');
}

function formatData(data: string[]) {
    interface IObjectKeys {
        [key: string]: string[];
    }
    let main: IObjectKeys = {};

    for (let entry of data) {
        let employee = entry.split(',');
        main[employee[0]] = employee.slice(1, 3);
        main[employee[0]].push(employee[5]);
    }

    return main;
}

module.exports = {
    getEmployees: (option: 'all' | 'one' | 'filter', parameter: string) => {
        try {
            let data = readFile();
            interface IObjectKeys {
                [key: string]: string[];
            }

            let main: IObjectKeys = {};

            if (option == 'all') {
                main = formatData(data);
            } else if (option == 'one') {
                let employee = data[parseInt(parameter) - 1].split(',');
                main[employee[0]] = employee.slice(1);
            } else {
                let filterValues: string[] = [];

                data.forEach(function (a: string) {
                    let splitData: string[] = a.split(',');
                    if (splitData[5].split('@')[1].includes(parameter))
                        filterValues.push(a);
                });

                main = formatData(filterValues);
            }
            return main;
        } catch (err) {
            console.error(err);
            return err;
        }
    },

    createEmployee: (data: Object) => {
        let number = readFile().length;

        let dataNew = Object.values(data);
        data = dataNew.map(function (a: string) {
            return a.replace('"', '');
        });

        let entry = `\n${number + 1},${data}`;

        fs.appendFile('./employees.txt', entry, (err: any) => {
            if (err) return 0;
            return 1;
        });
    },
};
