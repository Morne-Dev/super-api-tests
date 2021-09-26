import { describe } from 'mocha';
import supertest from 'supertest';

import {expect} from 'chai';


const request = supertest("https://gorest.co.in/public/v1/");
const TOKEN = 'cf046dcefe247f1f6fcced8b6a35883f8bf01d4c88aba189b1e743394fbfddc1';


describe('Users', () => {
     it('Get /users', (done) => {
        request.get('users?access-token=${TOKEN}').end((err,res) => {
            expect(res.body.data).to.not.be.empty;
            done();
        });
     });
});
