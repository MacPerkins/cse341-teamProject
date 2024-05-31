const { Types: { ObjectId } } = require('mongoose');
const mockingoose = require('mockingoose');

const { getWatchListById } = require('../controllers/watch_lists');
const WatchList = require('../models/watch_lists');
const TestResponse = require('../lib/test-response');

jest.setTimeout(60000)

describe('WatchLists routes', () => {
    test('Get one watch-list', async () => {
        const _watchlist = {
            _id: new ObjectId('66569223a99afc71ec7754b6')
        };

        mockingoose(WatchList).toReturn(_watchlist, 'findOne');

        const req = {
            params: { watchListId: new ObjectId('66569223a99afc71ec7754b6') },
        };



        const res = new TestResponse();


        try {
            await getWatchListById(req, res);
        } catch (error) {
            console.error(error);
        }

        console.log(res.statusCode);
        console.log(res.data);

        expect(res.statusCode).toBe(200);
        expect(res.data).toEqual(_watchlist);
    });
});