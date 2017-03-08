"use strict";

class Money {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    getCurrency() {
        return this.currency;
    }

    getAmount() {
        return this.amount;
    }

    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency);
    }

    plus(money) {
        return this.sum(this, money);
    }

    sum(augend, addend) {
        return {
            reduce(bank, to) {
                return new Money(augend.reduce(bank, to).amount + addend.reduce(bank, to).amount, to);
            }
        };
    }

    reduce(bank, to) {
        const rate = bank.getRate(this.getCurrency(), to);
        return new Money(this.amount / rate, to);
    }
}

module.exports = Money;