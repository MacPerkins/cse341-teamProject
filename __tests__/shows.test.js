const { Types: { ObjectId } } = require('mongoose');
const mockingoose = require('mockingoose');

const { getShowById } = require('../controllers/showsController');
const Show = require('../models/show');
const TestResponse = require('../lib/test-response');

jest.setTimeout(60000)

describe('Shows routes', () => {
    test('Get one show', async () => {
        
        const _show = {
            _id: new ObjectId('665aa286230530a73b54447f'),
            title: 'Futurama',
            director: 'Matt Groening',
            genre: 'Animation, Comedy, Sci-Fi',
            releaseYear: 1998,
            rating: 'TV-14',
            youtubeTrailer: 'https://www.youtube.com/watch?v=-1Dy9uAWaaU',
            reviewRating: 1,
            seasons: 7,
            language: 'English'
        };
        
        mockingoose(Show).toReturn(_show, 'findOne');

        const req = {
            params: { id: '66569223a99afc71ec7754b6' },
        };

        const res = new TestResponse();

        try {
            await getShowById(req, res);
        } catch (error) {
            console.error(error);
        }

        console.log(res.statusCode);
        console.log(res.data);

        expect(res.statusCode).toBe(200);
        expect(res.data.toJSON()).toEqual(_show);
        
    });
});