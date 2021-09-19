
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const dbConnect = require('../src/database/connection');
const should = chai.should();

chai.use(chaiHttp);

describe('Records', async function() {  
    this.timeout(15000); 

    before(async() => {
        await dbConnect.conectDatabase();
    })

    describe('/Get Records', () => {
        it('it should return startDate missing', (done) => {
            chai.request(server)
            .post(`/api/records`)
            .send({
                endDate : "2020-01-01",
                minCount : 0,
                maxCount : 0
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.status.should.be.eql(false);
                res.body.code.should.be.eql(-1);
                res.body.msg.should.be.eql("\"startDate\" is required");
                done();
            });
        });
        it('it should return endDate missing', (done) => {
            chai.request(server)
            .post(`/api/records`)
            .send({
                startDate : "2010-01-01",
                minCount : 0,
                maxCount : 0
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.status.should.be.eql(false);
                res.body.code.should.be.eql(-1);
                res.body.msg.should.be.eql("\"endDate\" is required");
                done();
            });
        });
        it('it should return minCount missing', (done) => {
            chai.request(server)
            .post(`/api/records`)
            .send({
                startDate : "2010-01-01",
                endDate : "2020-01-01",
                maxCount : 0
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.status.should.be.eql(false);
                res.body.code.should.be.eql(-1);
                res.body.msg.should.be.eql("\"minCount\" is required");
                done();
            });
        });
        it('it should return maxCount missing', (done) => {
            chai.request(server)
            .post(`/api/records`)
            .send({
                startDate : "2010-01-01",
                endDate : "2020-01-01",
                minCount : 0
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.status.should.be.eql(false);
                res.body.code.should.be.eql(-1);
                res.body.msg.should.be.eql("\"maxCount\" is required");
                done();
            });
        });

        it('it should return startDate is not valid', (done) => {
            chai.request(server)
            .post(`/api/records`)
            .send({
                startDate : "invalid date",
                endDate : "2020-01-01",
                minCount : 0,
                maxCount : 100,
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.status.should.be.eql(false);
                res.body.code.should.be.eql(-1);
                res.body.msg.should.be.eql("\"startDate\" must be a valid date");
                done();
            });
        });
        it('it should return endDate is not valid', (done) => {
            chai.request(server)
            .post(`/api/records`)
            .send({
                startDate : "2010-01-01",
                endDate : "invalid date",
                minCount : 0,
                maxCount : 100,
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.status.should.be.eql(false);
                res.body.code.should.be.eql(-1);
                res.body.msg.should.be.eql("\"endDate\" must be a valid date");
                done();
            });
        });
        it('it should return minCount is not valid', (done) => {
            chai.request(server)
            .post(`/api/records`)
            .send({
                startDate : "2010-01-01",
                endDate : "2020-01-01",
                minCount : "invalid number",
                maxCount : 100,
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.status.should.be.eql(false);
                res.body.code.should.be.eql(-1);
                res.body.msg.should.be.eql("\"minCount\" must be a number");
                done();
            });
        });
        it('it should return maxCount is not valid', (done) => {
            chai.request(server)
            .post(`/api/records`)
            .send({
                startDate : "2010-01-01",
                endDate : "2020-01-01",
                minCount : 0,
                maxCount : "invalid number",
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.status.should.be.eql(false);
                res.body.code.should.be.eql(-1);
                res.body.msg.should.be.eql("\"maxCount\" must be a number");
                done();
            });
        });
        it('it should return records', (done) => {
            chai.request(server)
            .post(`/api/records`)
            .send({
                startDate : "2010-01-01",
                endDate : "2020-01-01",
                minCount : 0,
                maxCount : 100,
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.code.should.be.eql(0);
                res.body.msg.should.be.eql("Records fetched successfully.");
                done();
            });
        });
    });
});

