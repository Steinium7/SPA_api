const multer = require('multer');

module.exports = {
    upload() {
        var storage = multer.diskStorage({
            destination: function (req: any, file: any, cb: any) {
                cb(null, './uploads');
            },
            filename: function (req: any, file: any, cb: any) {
                cb(null, 'employees.txt');
            },
        });

        return multer({ storage: storage });
    },
};
