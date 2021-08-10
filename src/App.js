import React from 'react';
import FormInfo from './components/Forms.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCard from './components/Cards.js';
import WeatherCard from './components/Weather.js';
import MovieCard from './components/Movies.js';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataInfo:[],
      show: false,
      display: false,
      weatherArray: [],
      rend: false,
      movieArr:'',
      disp:false,
    }
  }

  setData = (data, showing) => {
    this.setState({
      dataInfo: data,
      show: true,
      display: showing,
    })
  }
  setWeatherArray = (weatherData, showing) => {
    this.setState({
      weatherArray: weatherData,
      rend: showing
    })
    // console.log(this.state.weatherArr);
  }
  setMovies = (mov,dis) => {
    this.setState({
      movieArr: mov,
      disp:dis,
    })
    // console.log(this.state.movieArr);
  }

  render() {
    return (
      <>
        <FormInfo setData={this.setData} setWeather={this.setWeatherArray} setMovie={this.setMovies} />
        {this.state.show &&
          <InfoCard data={this.state.dataInfo} display={this.state.display} />
        }

        {this.state.show && <WeatherCard display={this.state.rend} weatherData={this.state.weatherArray} />}
        {this.state.show && <MovieCard display={this.state.disp} movieData={this.state.movieArr} />}
      </>
    )
  }
}

export default App;