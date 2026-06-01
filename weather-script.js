// Weather Dashboard JavaScript
// Using OpenWeatherMap API (Free tier)

const API_KEY = '4d8fb5b93d4af21d66a2948710284366'; // Free OpenWeatherMap API Key
const API_URL = 'https://api.openweathermap.org/data/2.5';

let currentWeatherData = null;
let forecastData = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Weather Dashboard loaded');
    // Try to get user's location on load
    if (navigator.geolocation) {
        getCurrentLocation();
    }
});

// Keyboard support - press Enter to search
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchWeather();
    }
});

// Search for weather by city name
async function searchWeather() {
    const city = document.getElementById('searchInput').value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }

    showLoading(true);
    hideError();

    try {
        const response = await fetch(
            `${API_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
        );

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found. Please check the spelling.');
            }
            throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        currentWeatherData = data;
        displayCurrentWeather(data);
        await getWeatherForecast(data.coord.lat, data.coord.lon);
        
    } catch (error) {
        showError(error.message);
        console.error('Error fetching weather:', error);
    } finally {
        showLoading(false);
    }
}

// Get weather for user's current location
async function getCurrentLocation() {
    showLoading(true);
    hideError();

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const { latitude, longitude } = position.coords;
            
            try {
                const response = await fetch(
                    `${API_URL}/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }

                const data = await response.json();
                currentWeatherData = data;
                document.getElementById('searchInput').value = data.name;
                displayCurrentWeather(data);
                await getWeatherForecast(latitude, longitude);
                
            } catch (error) {
                showError('Could not fetch weather for your location');
                console.error('Error:', error);
            } finally {
                showLoading(false);
            }
        },
        (error) => {
            showLoading(false);
            showError('Could not access your location. Please search for a city manually.');
            console.error('Geolocation error:', error);
        }
    );
}

// Display current weather
function displayCurrentWeather(data) {
    const mainWeather = document.getElementById('mainWeather');
    const cityName = document.getElementById('cityName');
    const dateTime = document.getElementById('dateTime');
    const temperature = document.getElementById('temperature');
    const weatherIcon = document.getElementById('weatherIcon');
    const weatherDescription = document.getElementById('weatherDescription');
    const feelsLike = document.getElementById('feelsLike');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');
    const pressure = document.getElementById('pressure');
    const visibility = document.getElementById('visibility');
    const clouds = document.getElementById('clouds');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');
    const lastUpdated = document.getElementById('lastUpdated');

    // City and date info
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    dateTime.textContent = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Temperature and weather
    temperature.textContent = Math.round(data.main.temp) + '°';
    weatherDescription.textContent = data.weather[0].description;
    feelsLike.textContent = Math.round(data.main.feels_like) + '°';

    // Weather icon
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    weatherIcon.alt = data.weather[0].description;

    // Weather details
    humidity.textContent = data.main.humidity + '%';
    windSpeed.textContent = Math.round(data.wind.speed * 3.6) + ' km/h'; // Convert m/s to km/h
    pressure.textContent = data.main.pressure + ' hPa';
    visibility.textContent = (data.visibility / 1000).toFixed(1) + ' km';
    clouds.textContent = data.clouds.all + '%';

    // Sunrise and sunset
    const sunriseTime = new Date(data.sys.sunrise * 1000);
    const sunsetTime = new Date(data.sys.sunset * 1000);
    sunrise.textContent = sunriseTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    sunset.textContent = sunsetTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    // Last updated
    lastUpdated.textContent = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // Show main weather section
    mainWeather.style.display = 'block';
    document.getElementById('alertsSection').style.display = 'none';

    // Check for weather alerts
    checkWeatherAlerts(data);
}

// Get 5-day weather forecast
async function getWeatherForecast(lat, lon) {
    try {
        const response = await fetch(
            `${API_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch forecast data');
        }

        const data = await response.json();
        forecastData = data;
        displayForecast(data);

    } catch (error) {
        console.error('Error fetching forecast:', error);
    }
}

// Display 5-day forecast
function displayForecast(data) {
    const forecastGrid = document.getElementById('forecastGrid');
    const forecastSection = document.getElementById('forecastSection');
    forecastGrid.innerHTML = '';

    // Get one forecast per day (every 24 hours)
    const forecasts = {};
    
    data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });
        
        // Keep only if we don't have this day yet
        if (!forecasts[day] && Object.keys(forecasts).length < 5) {
            forecasts[day] = {
                date: date,
                day: day,
                temp: Math.round(item.main.temp),
                tempMax: Math.round(item.main.temp_max),
                tempMin: Math.round(item.main.temp_min),
                description: item.weather[0].description,
                icon: item.weather[0].icon
            };
        }
    });

    // Create forecast cards
    Object.values(forecasts).forEach(forecast => {
        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.innerHTML = `
            <div class="forecast-day">${forecast.day}</div>
            <img src="https://openweathermap.org/img/wn/${forecast.icon}@2x.png" 
                 alt="${forecast.description}" class="forecast-icon">
            <div class="forecast-temp">${forecast.temp}°</div>
            <div style="font-size: 0.85rem; color: #999;">
                H: ${forecast.tempMax}° L: ${forecast.tempMin}°
            </div>
            <div class="forecast-desc">${forecast.description}</div>
        `;
        forecastGrid.appendChild(card);
    });

    forecastSection.style.display = 'block';
}

// Check for weather alerts and unsafe conditions
function checkWeatherAlerts(data) {
    const alertsList = document.getElementById('alertsList');
    const alertsSection = document.getElementById('alertsSection');
    alertsList.innerHTML = '';

    const alerts = [];

    // Check wind speed (unsafe for most activities > 20 km/h)
    const windKmh = Math.round(data.wind.speed * 3.6);
    if (windKmh > 25) {
        alerts.push({
            title: '⚠️ High Wind Warning',
            description: `Wind speed is ${windKmh} km/h. Horse riding and fishing may be unsafe.`
        });
    }

    // Check visibility (poor visibility < 3 km)
    const visibility = data.visibility / 1000;
    if (visibility < 3) {
        alerts.push({
            title: '🌫️ Low Visibility Alert',
            description: `Visibility is only ${visibility.toFixed(1)} km. Not recommended for river cruises and hiking.`
        });
    }

    // Check for heavy rain
    if (data.rain) {
        alerts.push({
            title: '🌧️ Rain Warning',
            description: 'Heavy rain expected. Plan indoor activities or postpone outdoor adventures.'
        });
    }

    // Check for thunderstorms
    if (data.weather[0].main === 'Thunderstorm') {
        alerts.push({
            title: '⛈️ Thunderstorm Warning',
            description: 'Thunderstorm in the area. Unsafe for outdoor activities.'
        });
    }

    // Display alerts if any
    if (alerts.length > 0) {
        alerts.forEach(alert => {
            const alertItem = document.createElement('div');
            alertItem.className = 'alert-item';
            alertItem.innerHTML = `
                <div class="alert-title">${alert.title}</div>
                <div class="alert-description">${alert.description}</div>
            `;
            alertsList.appendChild(alertItem);
        });
        alertsSection.style.display = 'block';
    }
}

// UI Helper Functions

function showLoading(show) {
    const spinner = document.getElementById('loadingSpinner');
    spinner.style.display = show ? 'block' : 'none';
}

function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = '❌ ' + message;
    errorDiv.style.display = 'block';
}

function hideError() {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.style.display = 'none';
}

// Auto-refresh weather every 10 minutes
setInterval(function() {
    if (currentWeatherData) {
        const city = currentWeatherData.name;
        searchWeather();
    }
}, 600000); // 10 minutes
