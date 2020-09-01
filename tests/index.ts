// this will be your custom import
// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import { expect } from 'chai';
import { Quote } from '../model';

describe('Options tests', () => {
    // the tests container
    it('checking default options', () => {
        const test = 5;
        expect(5, 'success').to.equal(5);
    });
});
// Configure chai
chai.use(chaiHttp);
chai.should();

describe('GET list of quotes', () => {
    it('should get all quotes', (done) => {
        chai.request(app)
            .get('/quotes/')
            .end((err, res) => {
                const { message, data } = res.body;
                message.should.equal('Quotes successfully requested');
                data.should.to.be.an('array');
                done();
            });
    });
});

describe('GET single quote', () => {
    it('should get a quote', (done) => {
        chai.request(app)
            .get('/quotes/')
            .end((err, res) => {
                const {
                    message,
                    data,
                }: { message: string; data: Quote[] } = res.body;
                const quote: Quote = data[0];
                if (data.length == 0) {
                    done();
                } else {
                    chai.request(app)
                        .get(`/quotes/${quote._id}`)
                        .end((err, res) => {
                            const {
                                message,
                                data,
                            }: { message: string; data: Quote } = res.body;
                            message.should.equal(
                                'Quote successfully requested'
                            );
                            data._id.should.equal(quote._id);

                            done();
                        });
                }
            });
    });
});
