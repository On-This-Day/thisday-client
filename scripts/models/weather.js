'use strict'

var API_URL = 'http://localhost:3000';

// var API_URL = 'https://git.heroku.com/this-day';

(module => {
  let weather = {};
  weather.handle = data => {
    // $('#weatherLoading').hide();
    weather.data = {};
    let things = JSON.parse(data.text);
    things.results
      .map(x => weather.data[x.datatype] = x.value);
    app.weatherView.renderWeather()
  }

  // $('#weatherLoading').show();
  weather.fetch = () => {
    $.get(`${API_URL}/noaa/weather/${localStorage.year}/${localStorage.month}/${localStorage.day}`)
      .then(weather.handle)
  }

  module.weather = weather;
})(app);