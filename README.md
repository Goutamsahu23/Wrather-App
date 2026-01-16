# 🌤️ Weather Dashboard

A beautiful, modern weather dashboard built with React and Vite. Get real-time weather forecasts, interactive charts, and location-based weather data with a stunning, eye-catching UI.

![Weather Dashboard](https://img.shields.io/badge/React-19.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🌍 **Location-Based Weather** - Get weather data for any city or use your current location
- 📊 **Interactive Charts** - Beautiful temperature charts using Recharts
- 📅 **5-Day Forecast** - Extended weather forecast with detailed information
- 🎨 **Modern UI** - Glassmorphism design with smooth animations and gradients
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast & Optimized** - Built with Vite for lightning-fast performance
- 🔍 **Search Functionality** - Easy city search with real-time results
- 🌡️ **Detailed Metrics** - Temperature, humidity, wind speed, pressure, and more

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher recommended)
- npm or yarn
- OpenWeatherMap API key (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Wrather-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your OpenWeatherMap API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Navigate to API keys section
   - Copy your API key

4. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add your API key:
     ```
     VITE_WEATHER_API_KEY=your_api_key_here
     ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📁 Project Structure

```
Wrather-App/
├── src/
│   ├── components/          # React components
│   │   ├── SearchBar.jsx    # City search and location button
│   │   ├── CurrentWeather.jsx  # Current weather display
│   │   ├── WeatherChart.jsx    # Interactive temperature chart
│   │   ├── Forecast.jsx        # 5-day forecast
│   │   ├── LoadingSpinner.jsx  # Loading state
│   │   └── ErrorMessage.jsx    # Error handling
│   ├── services/            # API services
│   │   └── weatherApi.js    # OpenWeatherMap API integration
│   ├── utils/               # Utility functions
│   │   └── weatherUtils.js  # Weather data formatting utilities
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── .env                     # Environment variables (create this)
├── package.json
└── vite.config.js
```

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **Recharts** - Interactive charts library
- **React Icons** - Icon library (Weather icons from /wi)
- **Axios** - HTTP client for API calls
- **OpenWeatherMap API** - Weather data provider

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Features Overview

### Current Weather Display
- Large temperature display
- Weather condition with icons
- Feels like temperature
- Detailed metrics (humidity, wind, pressure, visibility)
- Sunrise and sunset times

### Interactive Charts
- 24-hour temperature forecast
- Area chart with gradient fills
- Hover tooltips with detailed information
- Smooth animations

### 5-Day Forecast
- Daily weather predictions
- High and low temperatures
- Weather conditions with icons
- Clean card-based layout

## 🔧 Configuration

### API Configuration

The app uses OpenWeatherMap API. To configure:

1. Get your API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Add it to your `.env` file:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
3. Restart the dev server

### Customization

You can customize the app by:

- **Styling**: Edit `src/App.css` for visual changes
- **Components**: Modify components in `src/components/`
- **API Settings**: Adjust API parameters in `src/services/weatherApi.js`
- **Theme**: Update CSS variables in `src/index.css`

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🐛 Troubleshooting

### API Key Issues
- Make sure your API key is correctly set in `.env`
- Verify the key is active on OpenWeatherMap
- Check browser console for API error messages

### Location Permission
- The app requests location permission for "Current Location" feature
- Ensure your browser allows location access
- Some browsers may block location requests on HTTP (use HTTPS in production)

### Build Issues
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility
- Ensure all dependencies are installed

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for weather data API
- [React Icons](https://react-icons.github.io/react-icons/) for beautiful icons
- [Recharts](https://recharts.org/) for interactive charts

## 🚀 Deployment

To build for production:

```bash
npm run build
```

The `dist` folder will contain the production-ready files that can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static file server

Remember to set environment variables in your hosting platform's dashboard!

---

Made with ❤️ using React and Vite
