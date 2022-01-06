require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT || 3000
const app = express();

// const sequelize = new Sequelize('postgres://chirag:12345678:5432/giva')

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hello World 2'
    })
})

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`))