const Money = require('./Money');

class Dollar extends Money {
    constructor(amount, currency = 'USD') {
        super(amount);
        this.currency = currency;
    }

    times(multiplier) {
        return new Dollar(this.amount * multiplier);
    }


}

module.exports = Dollar;