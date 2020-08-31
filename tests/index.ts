// this will be your custom import
import { expect } from 'chai';

describe('Options tests', () => {
    // the tests container
    it('checking default options', () => {
        const test = 5;
        expect(5, 'success').to.equal(5);
    });
});
