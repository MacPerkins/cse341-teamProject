const { Types: { ObjectId } } = require('mongoose');
const mockingoose = require('mockingoose');

const { getWatchListById } = require('../controllers/watchListsController');
const WatchList = require('../models/watch_lists');
const TestResponse = require('../lib/test-response');

jest.setTimeout(60000)

describe('WatchLists routes', () => {
    test('Get one watch-list', async () => {
        const _watchlist = {
            _id: new ObjectId('66569223a99afc71ec7754b6'),
            username: 'john_doe',
            media_type: 'Movie',
            title: 'Inception',
            added_date: '2024-05-30',
            watched: true
        };

        mockingoose(WatchList).toReturn(_watchlist, 'findOne');

        const req = {
            params: { id: '66569223a99afc71ec7754b6' },
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
        expect(res.data.toJSON()).toEqual(_watchlist);
    });
});