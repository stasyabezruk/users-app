import { range } from './utils';

describe('pagination utils', () => {
    describe('range', () => {
        it('returns [1, 2, 3, 4, 5] when start = 1 && end = 5', () => {
            expect(range(1, 5)).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
        });

        it('returns [1, 2, 3, 4, 5] when start = 0 && end = 5', () => {
            expect(range(0, 5)).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
        });

        it('returns [5, 6, 7, 8] when start = 5 && end = 8', () => {
            expect(range(5, 8)).toEqual(expect.arrayContaining([5, 6, 7, 8]));
        });
    });
});
