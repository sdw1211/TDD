"use strict";
const Money = require('./Money');

class MoneyFactory {

    static dollar(amount) {
        return new Money(amount, 'USD');
    }

    static franc(amount) {
        return new Money(amount, 'CHF');
    }

}

module.exports = MoneyFactory;