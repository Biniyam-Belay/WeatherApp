import "./styles.css";

const weatherDisplay = document.querySelector('.weather');


document.querySelector('.searchBtn')
    .addEventListener('click', () => {
        const cityName = document.querySelector('.city').value;
        const apiKey  = '4c9f147f87b2a4aac7844d9e8a4b0a30'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error ('City not found');
                }

                return response.json();
            })
            .then(data => {
                const weatherInfo = 
                `<h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature : ${data.main.temp}°C</p>
                <p>Weather : ${data.weather[0].description}</p>
                <p>Humidity : ${data.main.humidity}%</p>
                <p>Wind Speed : ${data.wind.speed} m/s</p>`;

                document.querySelector('.weather').innerHTML = weatherInfo;
            })
            .catch(error => {
                document.querySelector('.weather').innerHTML = `<p>${error.message}</p>`;
            })
    })