import React, { Component } from 'react';
import Map from './Map';
// https://maps.googleapis.com/maps/api/js?key=AIzaSyCMGn-p65MM-2HStFiZQRBv8L6bsItCqVk&libraries=places

// const MY_API_KEY = "AIzaSyCMGn-p65MM-2HStFiZQRBv8L6bsItCqVk"
class SearchInMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      zip: e.target.value
    })
    console.log("zip", e.target.value);
  }

  handleSubmit = e => {
    alert('You entered the zip code: ' + this.state.zipInput)
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Search for some Gas!</h1><br></br>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <label>Zip Code: </label>
          <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" value={this.state.zipInput} onChange={this.handleChange}/>
          <button type="submit" className="btn btn-primary">Search</button>
        </form>

        <Map initialPosition={{lat: 40.719130, lng: -73.980000}} />
      </div>
    )
  }
}

export default SearchInMap
