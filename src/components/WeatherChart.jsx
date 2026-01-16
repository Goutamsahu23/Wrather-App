import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { formatTime, formatTemp } from '../utils/weatherUtils';

const WeatherChart = ({ forecastData }) => {
  if (!forecastData || !forecastData.list) return null;

  // Get next 24 hours of data (8 items, 3-hour intervals)
  const chartData = forecastData.list.slice(0, 8).map((item) => ({
    time: formatTime(item.dt),
    temp: Math.round(item.main.temp),
    feelsLike: Math.round(item.main.feels_like),
    humidity: item.main.humidity,
    label: new Date(item.dt * 1000).toLocaleTimeString('en-US', { hour: '2-digit' }),
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0]?.payload;
      return (
        <div className="chart-tooltip">
          <p className="tooltip-time">{data?.label || ''}</p>
          <p className="tooltip-temp">
            Temp: {payload[0]?.value}°C
          </p>
          <p className="tooltip-feels">
            Feels: {payload[1]?.value}°C
          </p>
          {data?.humidity && (
            <p className="tooltip-humidity">
              Humidity: {data.humidity}%
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="weather-chart-container">
      <h3 className="chart-title">24-Hour Forecast</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorFeelsLike" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis
            dataKey="label"
            stroke="rgba(255,255,255,0.7)"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="rgba(255,255,255,0.7)"
            style={{ fontSize: '12px' }}
            label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft', style: { fill: 'rgba(255,255,255,0.7)' } }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="temp"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorTemp)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="feelsLike"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorFeelsLike)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-color" style={{ background: '#8884d8' }}></span>
          <span>Temperature</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ background: '#82ca9d' }}></span>
          <span>Feels Like</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherChart;
