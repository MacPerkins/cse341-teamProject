const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Streaming Service API',
        description: 'API for Movies, Shows, Accounts, and Watch-lists'
    },
    host: 'localhost:8000', // Use this for testing OR use Render Host for deployment. 
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];


// This generates swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);