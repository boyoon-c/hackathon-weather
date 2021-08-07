import React, { Component } from 'react'

import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'


import { Button, Form } from 'react-bootstrap';
// import { BsHeartFill } from "react-icons/bs";

class Weather extends Component {
  state = {
    search: {
      city: '',
    }
  }
  handleChange = (event) => {
    const search = {...this.state.search, [event.target.name]: event.target.value}
    this.setState({
      search
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target)
    this.props.handleWeatherSearch(this.state.search)
  }
  render() { 
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="city" id="city" value={this.state.city}/>
          <button>Search</button>
        </form>
        <h1>{this.props.weatherData.timezone}</h1>
      </>
    );
  }
}
 
export default Weather;
