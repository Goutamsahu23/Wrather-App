import { formatDate, formatTemp, groupForecastByDay } from '../utils/weatherUtils';
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiDayHaze,
} from 'react-icons/wi';

const Forecast = ({ forecastData }) => {
  if (!forecastData || !forecastData.list) return null;

  const dailyForecast = groupForecastByDay(forecastData.list).slice(0, 5);

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
    <div className="forecast-container">
      <h3 className="forecast-title">5-Day Forecast</h3>
      <div className="forecast-list">
        {dailyForecast.map((day, index) => (
          <div key={index} className="forecast-item">
            <div className="forecast-day">
              <p className="day-name">
                {index === 0 ? 'Today' : formatDate(day.date)}
              </p>
              <div className="forecast-icon">{getWeatherIcon(day.icon)}</div>
            </div>
            <div className="forecast-temps">
              <span className="temp-high">{formatTemp(day.max)}</span>
              <span className="temp-low">{formatTemp(day.min)}</span>
            </div>
            <div className="forecast-condition">{day.main}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
