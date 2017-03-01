const Dollar = require('./Dollar');

class Money {
    constructor(amount) {
        this.amount = amount;
    }

    getCurrency() {
        return this.currency;
    }    
}

module.exports = Money;