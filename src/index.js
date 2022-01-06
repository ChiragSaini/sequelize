require('dotenv').config()
const express = require('express');
const lodash  = require('lodash')
const models = require('../database/models')
const cache = require('./cache');

const PORT = process.env.PORT || 3000
const app = express();

app.use(express.json());

const main = async () => {
    try {
        await models.sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    app.get('/', (req, res) => {
        return res.status(200).send({
            message: 'Welcome'
        })
    })
    
    app.get('/search/:stateName', async (req, res) => {
        const { stateName } = req.params;
        const cachedData = await cache.get(stateName);
        if (cachedData){
            // console.log('Returning Cached data')
            return res.status(200).send({
                data: cachedData,
            })
        }
        const data = await models.State.findAll({
            where: {
                state: lodash.capitalize(stateName),
            }
        })
        await cache.saveWithTtl(stateName, data);
        // console.log('Not Cached data');
        return res.status(200).send({
            data
        })
    })
    
    app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`))
}

main();