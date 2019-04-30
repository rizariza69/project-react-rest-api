import React from "react";
import axios from "axios";

const API_STRING = `https://community-open-weather-map.p.rapidapi.com/forecast?q=Jakarta%2C+Indonesia`;

export class Weather extends React.Component {
  state = {
    weather: {},
    showAll: false
  };

  componentDidMount() {
    axios
      .get(API_STRING, {
        headers: {
          "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY
        }
      })
      .then(res => {
        const weather = res.data;

        this.setState({ weather });
        console.log(weather);
      });
  }

  handleShowAll = () => {
    this.setState({ showAll: true });
  };

  render() {
    const { weather } = this.state;
    return (
      <div>
        <h3>
          Weather <span>{weather.city && weather.city.name}</span> :{" "}
          <span>{weather.list && weather.list[0].weather[0].main}</span>
        </h3>
        {/* <h3>{weather.city && weather.city.name}</h3>

        {weather.list && weather.list[0].weather[0].main} */}
        {/* <h3>{weather.list.weather.description}</h3> */}
      </div>
    );
  }
}
