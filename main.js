let weather = {
    apiKey: "e53fd3b6456796aa309d7e2ce592db09",
    fetchWeather: function (city) {
        fetch (
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind-speed").innerText = "Wind Speed:  " + speed + " km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1280x720/? " + name + "')"
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-btn").value);
    }
};

document.querySelector(".search .btn").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-btn").addEventListener("keyup", function(event) {
    if (event.key == "Enter") weather.search();
});

weather.fetchWeather("Caracas");