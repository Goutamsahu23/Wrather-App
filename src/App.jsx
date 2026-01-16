import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import WeatherChart from './components/WeatherChart';
import Forecast from './components/Forecast';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import WeatherEffects from './components/WeatherEffects';
import { getWeatherByCity, getWeatherByCoords, getUserLocation } from './services/weatherApi';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (fetchFn) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchFn();
      setWeatherData(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (city) => {
    fetchWeather(() => getWeatherByCity(city));
  };

  const handleLocationClick = async () => {
    try {
      const coords = await getUserLocation();
      fetchWeather(() => getWeatherByCoords(coords.lat, coords.lon));
    } catch (err) {
      setError(err.message || 'Failed to get location. Please enable location services.');
    }
  };

  // Load default city on mount (London)
  useEffect(() => {
    fetchWeather(() => getWeatherByCity('London'));
  }, []);

  const weatherCondition = weatherData?.current?.weather?.[0]?.main || null;

  return (
    <div className="app">
      <div className="app-background"></div>
      <WeatherEffects weatherCondition={weatherCondition} />
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">
            <span className="title-icon">🌤️</span>
            Weather Dashboard
          </h1>
          <p className="app-subtitle">Real-time weather forecasts and insights</p>
        </header>

        <SearchBar
          onSearch={handleSearch}
          onLocationClick={handleLocationClick}
          loading={loading}
        />

        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} onRetry={() => handleSearch('London')} />}

        {!loading && !error && weatherData && (
          <div className="weather-content">
            <CurrentWeather data={weatherData} />
            <WeatherChart forecastData={weatherData.forecast} />
            <Forecast forecastData={weatherData.forecast} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
