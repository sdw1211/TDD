"use strict";
const Money = require('./Money');

class Franc extends Money {
    constructor(amount, currency) {
        super(amount, currency);
    }
}

module.exports = Franc;