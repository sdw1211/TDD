"use strict";

const Money = require('./Money');

class Bank {

    constructor() {
        this.rate = new Map();
    }

    makeString(from, to) {
        return `${from}->${to}`;
    }

    addRate(from, to, rate) {
        this.rate.set(this.makeString(from, to), rate);
    }

    getRate(from, to) {
        if (this.rate.has(this.makeString(from, to))) {
            return this.rate.get(this.makeString(from, to));
        } else {
            return 1;
        }
    }

    reduce(source, to) {
        return source.reduce(this, to);
    }
}

module.exports = Bank;