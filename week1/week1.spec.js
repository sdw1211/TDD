const MoneyFactory = require('./MoneyFactory');

describe('달러 테스트', () => {
    it('곱셈을 테스트 합니다.', () => {
        const fiveDollar = MoneyFactory.dollar(5);
        expect(MoneyFactory.dollar(10)).toEqual(fiveDollar.times(2));
        expect(MoneyFactory.dollar(15)).toEqual(fiveDollar.times(3));
    });

    it('equal 함수를 테스트 합니다', () => {
        expect(MoneyFactory.dollar(6)).not.toEqual(MoneyFactory.dollar(5));
        expect(MoneyFactory.dollar(5)).toEqual(MoneyFactory.dollar(5));
    })
});

describe('프랑 테스트', () => {
    it('곱셈을 테스트 합니다.', () => {
        const fiveFranc = MoneyFactory.franc(5);
        expect(MoneyFactory.franc(10)).toEqual(fiveFranc.times(2));
        expect(MoneyFactory.franc(15)).toEqual(fiveFranc.times(3));
    });

    it('equal 함수를 테스트 합니다', () => {
        expect(MoneyFactory.franc(6)).not.toEqual(MoneyFactory.franc(5));
        expect(MoneyFactory.franc(5)).toEqual(MoneyFactory.franc(5));
    })
});

describe('달러/프랑 테스트', () => {
    it('달러와 프랑은 다르다는 것을 테스트', () => {
        expect(MoneyFactory.dollar(10)).not.toEqual(MoneyFactory.franc(10));
    });

    it('화폐 단위 테스트', () => {
        expect('USD').toEqual((MoneyFactory.dollar(1)).getCurrency());
        expect('CHF').toEqual((MoneyFactory.franc(1)).getCurrency());
    });
});