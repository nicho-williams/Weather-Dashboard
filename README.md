# Weather Dashboard

This is a simple full-stack Weather Dashboard application built using Node.js, Express, MongoDB, and React. The application allows users to search for weather information of any city, display the current weather, and save favorite cities to a MongoDB database.

## Features

- Search for current weather by city
- Display weather information (temperature, description)
- Save favorite cities to a MongoDB database
- Display favorite cities

## Technologies Used

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **API:** OpenWeatherMap API

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)
- MongoDB
- Git

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/weather-dashboard.git
    cd weather-dashboard
    ```

2. **Install server dependencies:**

    ```bash
    cd server
    npm install
    ```

3. **Install client dependencies:**

    ```bash
    cd ../client
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the `server` directory and add your OpenWeatherMap API key:

    ```env
    OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
    ```

### Running the Application

1. **Start MongoDB:**

    ```bash
    brew services start mongodb-community
    ```

2. **Start the server:**

    ```bash
    cd server
    node server.js
    ```

    The server will be running at `http://localhost:3000`.

3. **Start the client:**

    ```bash
    cd ../client
    npm start
    ```

    The client will be running at `http://localhost:3001`.

### Usage

1. **Search for Weather:**

    - Enter the name of a city in the search input and click the "Get Weather" button.
    - The weather information for the city will be displayed.

2. **Save to Favorites:**

    - After fetching the weather information for a city, click the "Add to Favorites" button to save the city to your favorites list.

3. **View Favorite Cities:**

    - The list of favorite cities will be displayed below the weather information.

### Project Structure

```plaintext
weather-dashboard/
├── client/              # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── App.js
│       └── index.js
├── server/              # Node.js backend
│   ├── models/
│   │   └── City.js
│   ├── server.js
│   └── .env             # Environment variables
├── .gitignore
├── README.md

Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
OpenWeatherMap for the weather data API
MongoDB for the database
Express for the web framework
React for the frontend library
