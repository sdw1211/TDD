const Dollar = require('./Dollar');
const Franc = require('./Franc');

class MoneyFactory {

    static dollar(amount) {
        return new Dollar(amount, 'USD');
    }

    static franc(amount) {
        return new Franc(amount, 'CHF');
    }

}

module.exports = MoneyFactory;