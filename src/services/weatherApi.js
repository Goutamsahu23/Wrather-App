import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || 'demo_key';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const GEO_URL = 'https://api.openweathermap.org/geo/1.0';

const weatherApi = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    units: 'metric',
  },
});

const geoApi = axios.create({
  baseURL: GEO_URL,
  params: {
    appid: API_KEY,
    limit: 5,
  },
});

// Get city suggestions (geocoding)
export const getCitySuggestions = async (query) => {
  try {
    const response = await geoApi.get('/direct', {
      params: { q: query },
    });
    return response.data.map((city) => ({
      name: city.name,
      country: city.country,
      state: city.state,
      lat: city.lat,
      lon: city.lon,
      displayName: `${city.name}${city.state ? `, ${city.state}` : ''}, ${city.country}`,
    }));
  } catch (error) {
    console.error('Error fetching city suggestions:', error);
    return [];
  }
};

// Get current weather and forecast by city name
export const getWeatherByCity = async (city) => {
  try {
    const [current, forecast] = await Promise.all([
      weatherApi.get('/weather', { params: { q: city } }),
      weatherApi.get('/forecast', { params: { q: city } }),
    ]);
    return {
      current: current.data,
      forecast: forecast.data,
    };
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch weather data');
  }
};

// Get weather by coordinates
export const getWeatherByCoords = async (lat, lon) => {
  try {
    const [current, forecast] = await Promise.all([
      weatherApi.get('/weather', { params: { lat, lon } }),
      weatherApi.get('/forecast', { params: { lat, lon } }),
    ]);
    return {
      current: current.data,
      forecast: forecast.data,
    };
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch weather data');
  }
};

// Get user's location
export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => reject(error)
    );
  });
};
