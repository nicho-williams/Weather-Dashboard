const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/weatherDB', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    console.error('Ensure MongoDB is running on localhost:27017');
});

const citySchema = new mongoose.Schema({
    name: String,
});

const City = mongoose.model('City', citySchema);

app.get('/', (req, res) => {
    res.send('Weather Dashboard API');
});

app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;
    const apiKey = '7c9ffc173315cc8976055c7480046e02'; // Replace with your OpenWeatherMap API key
    
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error); // Log full error
        res.status(500).send('Server Error: ' + error.message);
    }
});

app.post('/favorites', async (req, res) => {
    const cityName = req.body.name;
    const city = new City({ name: cityName });
    
    await city.save();
    res.send('City saved!');
});

app.get('/favorites', async (req, res) => {
    const cities = await City.find();
    res.json(cities);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
