// this will be your custom import
// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import { expect } from 'chai';
import { Quote, QuoteModel } from '../model';

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
    it('should get all quotes', function (done) {
        this.timeout(0);
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
    it('should get a quote', function (done) {
        this.timeout(0);
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

describe('POST single quote', () => {
    it('should create a quote', function (done) {
        this.timeout(0);
        chai.request(app)
            .post('/quotes/create')
            .send({
                title: 'test-title',
            })
            .end((err, res) => {
                const {
                    message,
                    data,
                }: { message: string; data: Quote } = res.body;
                message.should.equal('New quote created');
                data.title.should.equal('test-title');
                done();
            });
    });
});

describe('DELETE single quote', () => {
    it('should delete a quote', function (done) {
        this.timeout(0);
        chai.request(app)
            .get('/quotes/')
            .end((err, res) => {
                const {
                    message,
                    data,
                }: { message: string; data: Quote[] } = res.body;
                const filtered = data.filter((x: Quote) =>
                    x.title.includes('test')
                );
                if (!filtered) {
                    done();
                }
                const quote: Quote = filtered[0];

                chai.request(app)
                    .delete(`/quotes/${quote._id}`)
                    .end((err, res) => {
                        const { message }: { message: string } = res.body;
                        message.should.equal('quote deleted');
                        done();
                    });
            });
    });
});

describe('PUT single quote', () => {
    it('should update a quote', function (done) {
        this.timeout(0);
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
                        .put(`/quotes/${quote._id}`)
                        .send({ title: 'test-update' })
                        .end((err, res) => {
                            const { message }: { message: string } = res.body;
                            message.should.equal('quote updated');
                            done();
                        });
                }
            });
    });
});
