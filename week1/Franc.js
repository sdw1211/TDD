const Money = require('./Money');

class Franc extends Money {
    constructor(amount, currency = 'CHF') {
        super(amount);
        this.currency = currency;
    }

    times(multiplier) {
        return new Franc(this.amount * multiplier);
    }
}

module.exports = Franc;