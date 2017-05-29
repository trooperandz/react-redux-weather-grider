import React, { Component } from 'react';

class GoogleMap extends Component {
  // Gets called after the component has been rendered to the screen
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      }
    });
  }

  render() {
    // this.refs.map will give a direct reference to the html element
    // Used a lot with 3rd-party libraries
    return <div ref="map" />;
  }
}

export default GoogleMap;