import { formatDate } from './formatDate';

describe('utils', () => {
    describe('formateDate', () => {
        it('test format date ', () => {
            expect(formatDate('2022-04-22T02:16:07Z')).toEqual('April 22, 2022');
        });
    });
});
