import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiDayHaze,
  WiStrongWind,
  WiHumidity,
  WiBarometer,
  WiSunrise,
  WiSunset,
} from 'react-icons/wi';
import { formatTime, formatTemp, getWindDirection } from '../utils/weatherUtils';

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  const { current } = data;
  const weather = current.weather[0];
  const main = current.main;
  const wind = current.wind;
  const sys = current.sys;

  const getWeatherIcon = (iconCode) => {
    const iconMap = {
      '01d': <WiDaySunny />,
      '01n': <WiDaySunny />,
      '02d': <WiCloudy />,
      '02n': <WiCloudy />,
      '03d': <WiCloudy />,
      '03n': <WiCloudy />,
      '04d': <WiCloudy />,
      '04n': <WiCloudy />,
      '09d': <WiRain />,
      '09n': <WiRain />,
      '10d': <WiRain />,
      '10n': <WiRain />,
      '11d': <WiThunderstorm />,
      '11n': <WiThunderstorm />,
      '13d': <WiSnow />,
      '13n': <WiSnow />,
      '50d': <WiDayHaze />,
      '50n': <WiDayHaze />,
    };
    return iconMap[iconCode] || <WiDaySunny />;
  };

  return (
    <div className="current-weather">
      <div className="weather-header">
        <div className="location-info">
          <h2 className="city-name">{current.name}</h2>
          <p className="country">{current.sys.country}</p>
        </div>
        <div className="weather-icon-large">
          {getWeatherIcon(weather.icon)}
        </div>
      </div>

      <div className="temperature-section">
        <div className="main-temp">
          {formatTemp(main.temp)}
        </div>
        <div className="weather-desc">
          <p className="description">{weather.description}</p>
          <p className="feels-like">
            Feels like {formatTemp(main.feels_like)}
          </p>
        </div>
      </div>

      <div className="weather-details-grid">
        <div className="detail-card">
          <WiHumidity className="detail-icon" />
          <div className="detail-content">
            <p className="detail-label">Humidity</p>
            <p className="detail-value">{main.humidity}%</p>
          </div>
        </div>

        <div className="detail-card">
          <WiStrongWind className="detail-icon" />
          <div className="detail-content">
            <p className="detail-label">Wind Speed</p>
            <p className="detail-value">
              {wind.speed} m/s {getWindDirection(wind.deg)}
            </p>
          </div>
        </div>

        <div className="detail-card">
          <WiBarometer className="detail-icon" />
          <div className="detail-content">
            <p className="detail-label">Pressure</p>
            <p className="detail-value">{main.pressure} hPa</p>
          </div>
        </div>

        <div className="detail-card">
          <WiSunrise className="detail-icon" />
          <div className="detail-content">
            <p className="detail-label">Sunrise</p>
            <p className="detail-value">{formatTime(sys.sunrise)}</p>
          </div>
        </div>

        <div className="detail-card">
          <WiSunset className="detail-icon" />
          <div className="detail-content">
            <p className="detail-label">Sunset</p>
            <p className="detail-value">{formatTime(sys.sunset)}</p>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-content">
            <p className="detail-label">Visibility</p>
            <p className="detail-value">
              {(current.visibility / 1000).toFixed(1)} km
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
