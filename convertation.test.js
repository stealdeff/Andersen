
const convertation = require('./convertation');
describe('convertation', () => {
    test('binary 1010 to decimal 10', () => {
        expect(convertation('1010')).toBe(10);
    });
    test('binary 111 to decimal 7', () => {
        expect(convertation('111')).toBe(7);
    });
    test('decimal 10 to binary 1010', () => {
        expect(convertation(10)).toBe('1010');
    });
    test('decimal 7 to binary 111', () => {
        expect(convertation(7)).toBe('111');
    });

    for (let i = 0; i < 10; i++) {
        test(`random decimal to binary conversion test ${i + 1}`, () => {
            const randomDecimal = Math.floor(Math.random() * 1000); 
            const expectedBinary = randomDecimal.toString(2); 
            expect(convertation(randomDecimal)).toBe(expectedBinary);
        });

        test(`random binary to decimal conversion test ${i + 1}`, () => {
            const randomDecimal = Math.floor(Math.random() * 1000);
            const binaryString = randomDecimal.toString(2); 
            expect(convertation(binaryString)).toBe(randomDecimal);
        });
    }
});