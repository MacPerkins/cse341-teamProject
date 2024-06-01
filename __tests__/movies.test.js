const { Types: { ObjectId } } = require('mongoose');
const mockingoose = require('mockingoose');

const { getMovieById } = require('../controllers/moviesController');
const Movie = require('../models/movie');
const TestResponse = require('../lib/test-response');

jest.setTimeout(60000)

describe('Movies routes', () => {
    test('Get one movie', async () => {
        
        const _movie = {
            _id: new ObjectId('665aa286230530a73b54447f'),
            title: 'The Big Lebowski',
            director: 'Joel Coen, Ethan Coen',
            genre: 'Comedy, Crime',
            releaseYear: 1998,
            rating: 'R',
            youtubeTrailer: 'https://www.youtube.com/watch?v=cd-go0oBF4Y',
            reviewRating: 2,
            duration: '1h 57m',
            language: 'English'
        };
        
        mockingoose(Movie).toReturn(_movie, 'findOne');

        const req = {
            params: { id: '66569223a99afc71ec7754b6' },
        };

        const res = new TestResponse();

        try {
            await getMovieById(req, res);
        } catch (error) {
            console.error(error);
        }

        console.log(res.statusCode);
        console.log(res.data);

        expect(res.statusCode).toBe(200);
        expect(res.data.toJSON()).toEqual(_movie);
        
    });
});