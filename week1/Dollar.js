"use strict";
const Money = require('./Money');

class Dollar extends Money {
    constructor(amount, currency) {
        super(amount, currency);
    }
}

module.exports = Dollar;