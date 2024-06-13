import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  // State variables to store city input and weather data
  const [cityInput, setCityInput] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Function to fetch weather data for a specific city
  const fetchWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/weather/${cityInput}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  };

  // Function to fetch favorite cities from the server
  const fetchFavorites = async () => {
    try {
      const response = await axios.get('http://localhost:3000/favorites');
      setFavorites(response.data);
    } catch (error) {
      console.error('Error fetching favorite cities:', error.message);
    }
  };

  // Function to add a city to favorites
  const addToFavorites = async (cityName) => {
    try {
      await axios.post('http://localhost:3000/favorites', { name: cityName });
      fetchFavorites(); // Refresh the list of favorites after adding a new city
    } catch (error) {
      console.error('Error adding city to favorites:', error.message);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (cityInput.trim() !== '') {
      await fetchWeather(); // Fetch weather data for the specified city
    }
  };

  // Function to handle city input change
  const handleCityChange = (e) => {
    setCityInput(e.target.value); // Update the city input state as the user types
  };

  // UseEffect hook to fetch favorite cities when the component mounts
  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div>
      <h1>Weather Dashboard</h1>
      
      {/* Form to input city */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={cityInput} onChange={handleCityChange} />
        <button type="submit">Get Weather</button>
      </form>

      {/* Display weather data */}
      {weatherData && (
        <div>
          <h2>{weatherData.name} Weather</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <button onClick={() => addToFavorites(weatherData.name)}>Add to Favorites</button>
        </div>
      )}

      {/* Display favorite cities */}
      <h2>Favorite Cities</h2>
      <ul>
        {favorites.map((city) => (
          <li key={city._id}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
