const express = require("express");
const { body } = require("express-validator");
const calculator = require("../controller/calculator.controller");

const router = express.Router();

router.post(
    '/', [
        body('paramone')
        .exists()
        .withMessage('El primer parametro es requerido')
        .matches(/^[0-9]+$/, "i")
        .withMessage('El primer parametro debe ser numerico')
        .isLength({ min: 1, max: 3 })
        .withMessage('El primer parametro debe ser entre 1-3 caractes')
        .trim()
        .escape(),
        body('paramtwo')
        .exists()
        .withMessage('El segundo parametro es requerido')
        .matches(/^[0-9]+$/, "i")
        .withMessage('El segundo parametro debe ser numerico')
        .isLength({ min: 1, max: 3 })
        .withMessage('El segundo parametro debe ser entre 1-3 caractes')
        .trim()
        .escape(),
        body('operator')
        .exists()
        .withMessage('El tercer parametro "Operator" debe ser (+, -, *, d)')
        .trim()
        .escape()
    ],
    calculator.sum
);
// route 
module.exports = router;