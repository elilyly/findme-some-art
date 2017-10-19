import React, { Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
/*global google*/

export default class Map extends Component {
  constructor() {
    super()
    this.state = {
      type: ''
    }
  }
  componentDidMount() {
    const {lat, lng } = this.props.initialPosition;
    var map = new google.maps.Map(this.refs.map, {
      center: {
        lat,
        lng
      },
      zoom: 14
    })

    new google.maps.Marker({
      position: {
        lat,
        lng
      },
      map: map
    })
    // this.artSearch()
  }

  // artSearch(input) {
  //   const searchTerm =  'latitude=40.719130&longitude=-73.980000'
  //   axios.get(`http://www.nyartbeat.com/list/event_searchNear?q=${searchTerm}`)
  //   .then( response => {
  //     const zip = response.data.items
  //     this.setState({
  //
  //     })
  //   })
  // }

  render() {
    return (
      <div>
        <div ref="map" style={{ width: 500, height:500, border: '1px solid black'}}>
          <pre>{JSON.stringify(this.props.initialPosition, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

Map.propTypes = {
  initialPosition: PropTypes.object.isRequired
}
