const { Types: { ObjectId } } = require('mongoose');
const mockingoose = require('mockingoose');

const { getAccountById } = require('../controllers/accountsController');
const Account = require('../models/account');
const TestResponse = require('../lib/test-response');

jest.setTimeout(60000)

describe('Account routes', () => {
    test('Get one account', async () => {
        
        const _account = {
            _id: new ObjectId('665aa286230530a73b54447f'),
            fullName: 'John Doe',
            username: 'johndoe',
            email: 'johndoe@example.com',
            githubId: '77976534'
        };
        
        mockingoose(Account).toReturn(_account, 'findOne');

        const req = {
            user: { githubId: '77976534' },
        };

        const res = new TestResponse();

        try {
            await getAccountById(req, res);
        } catch (error) {
            console.error(error);
        }

        console.log(res.statusCode);
        console.log(res.data);

        expect(res.statusCode).toBe(200);
        expect(res.data.toJSON()).toEqual(_account);
        
    });
});