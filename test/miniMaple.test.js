import {MiniMaple} from "../src/miniMaple";


describe('segments', () => {
    test('power > 2 wo multiplyer', () => {
        const input = 'x^10, x';
        const output = '10*x^9';
        const maple = new MiniMaple();
        expect(maple.diff(input)).toBe(output);
    });

    test('power > 2 w multiplyer', () => {
        const input = '5*x^10, x';
        const output = '50*x^9';
        const maple = new MiniMaple();
        expect(maple.diff(input)).toBe(output);
    });

    test('power 2 wo multiplyer', () => {
        const input = 'x^2, x';
        const output = '2*x';
        const maple = new MiniMaple();
        expect(maple.diff(input)).toBe(output);
    });

    test('power 2 w multiplyer', () => {
        const input = '10*x^2, x';
        const output = '20*x';
        const maple = new MiniMaple();
        expect(maple.diff(input)).toBe(output);
    });

    test('no pow only mult', () => {
        const input = '10*x, x';
        const output = '10';
        const maple = new MiniMaple();
        expect(maple.diff(input)).toBe(output);
    });

    test('no variable', () => {
        const input = '10, x';
        const output = '0';
        const maple = new MiniMaple();
        expect(maple.diff(input)).toBe(output);
    });

    test('wrong variable with pow and mult', () => {
        const input = '50*x^3, y';
        const output = '0';
        const maple = new MiniMaple();
        expect(maple.diff(input)).toBe(output);
    });

    test('wrong variable with pow', () => {
        const input = 'x^3, y';
        const output = '0';
        const maple = new MiniMaple();
        expect(maple.diff(input)).toBe(output);
    });

    test('wrong variable with mult', () => {
        const input = '50*x, y';
        const output = '0';
        const maple = new MiniMaple();
        expect(maple.diff(input)).toBe(output);
    });
});

describe('compositions', () => {
    test('positive', () => {
        const input = '15*x^2+3*x^11+x^4+x^2+15*x+70, x';
        const output = '30*x+33*x^10+4*x^3+2*x+15';
        const maple = new MiniMaple();
        expect(maple.diff(input)).toBe(output);
    });

    test('negative', () => {
        const input = '-15*x^2-3*x^11-x^4-x^2-15*x-70, x';
        const output = '-30*x-33*x^10-4*x^3-2*x-15';
        const maple = new MiniMaple();
        expect(maple.diff(input)).toBe(output);
    });

    test('wrong variable', () => {
        const input = '15*x^2+3*x^11+x^4+x^2+15*x+70, y';
        const output = '0';
        const maple = new MiniMaple();
        expect(maple.diff(input)).toBe(output);
    });
});

describe('defautl', () => {
    test('1-Default', () => {
        const input = '4*x^3, x';
        const output = '12*x^2';
        const maple = new MiniMaple();
        expect(maple.diff(input)).toBe(output);
    });
    
    test('2-Default', () => {
        const input = '4*x^3, y';
        const output = '0';
        const maple = new MiniMaple();
        expect(maple.diff(input)).toBe(output);
    });
    
    test('3-Default', () => {
        const input = '4*x^3-x^2, x';
        const output = '12*x^2-2*x';
        const maple = new MiniMaple();
        expect(maple.diff(input)).toBe(output);
    });
});
