// Weather icon mapping
export const getWeatherIcon = (weatherId) => {
  // OpenWeatherMap weather condition codes
  if (weatherId >= 200 && weatherId < 300) return 'Thunderstorm';
  if (weatherId >= 300 && weatherId < 400) return 'Drizzle';
  if (weatherId >= 500 && weatherId < 600) return 'Rain';
  if (weatherId >= 600 && weatherId < 700) return 'Snow';
  if (weatherId >= 700 && weatherId < 800) return 'Atmosphere';
  if (weatherId === 800) return 'Clear';
  if (weatherId >= 801 && weatherId < 805) return 'Clouds';
  return 'Clear';
};

// Format date
export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
};

// Format time
export const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
};

// Get day name
export const getDayName = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
};

// Format temperature
export const formatTemp = (temp) => {
  return `${Math.round(temp)}°`;
};

// Get wind direction
export const getWindDirection = (degrees) => {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return directions[Math.round(degrees / 45) % 8];
};

// Group forecast by day
export const groupForecastByDay = (forecastList) => {
  const grouped = {};
  forecastList.forEach((item) => {
    const date = new Date(item.dt * 1000).toDateString();
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(item);
  });
  return Object.values(grouped).map((day) => ({
    date: day[0].dt,
    items: day,
    min: Math.min(...day.map((item) => item.main.temp_min)),
    max: Math.max(...day.map((item) => item.main.temp_max)),
    icon: day[Math.floor(day.length / 2)].weather[0].icon,
    main: day[Math.floor(day.length / 2)].weather[0].main,
  }));
};
