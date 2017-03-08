"use strict";

const Money = require('./Money');

class Bank {

    constructor() {
        this.rate = new Map();
    }

    addRate(from, to, rate) {
        this.rate.set(`${from}->${to}`, rate);
    }

    getRate(from, to) {
        if (this.rate.has(`${from}->${to}`)) {
            return this.rate.get(`${from}->${to}`);
        } else {
            return 1;
        }
    }

    reduce(source, to) {
        return source.reduce(this, to);
    }
}

module.exports = Bank;