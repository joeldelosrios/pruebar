const { validationResult } = require("express-validator");

// Operaciones
const sumOperator = (param1, param2) => (+param1) + (+param2);
const restOperator = (param1, param2) => (+param1) - (+param2);
const multOperator = (param1, param2) => (+param1) * (+param2);
const divOperator = (param1, param2) => (+param1) / (+param2);

exports.sum = (req, res, nest) => {

    const errors = validationResult(req);

    const op = req.body.operator;

    if (!errors.isEmpty()) {
        const err = new Error('Error');
        err.statusCode = 500;
        err.data = errors.array();
        throw err;
    }
    var resul = 0;
    switch (op) {
        case '+':
            resul = sumOperator(+req.body.paramone, +req.body.paramtwo);
            break
        case '-':
            resul = restOperator(+req.body.paramone, +req.body.paramtwo);
            break
        case '*':
            resul = multOperator(+req.body.paramone, +req.body.paramtwo);
            break
        case 'd':
            resul = divOperator(+req.body.paramone, +req.body.paramtwo);
            break
        default:
            console.log("No existe la operación");
    }

    const params = {
        body: req.body,
        result: resul
    }

    try {
        res.status(201).json({ message: 'sum', params });
    } catch (err) {

        const error = new Error('Error');
        error.statusCode = 500;
        error.data = err;
        throw error;
    }
}