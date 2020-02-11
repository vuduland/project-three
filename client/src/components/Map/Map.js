import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '90%'
};

export class MapContainer extends Component {
  render() {
    console.log(process.env.REACT_APP_MAP_APIKEY)
    return (
      <Map
        google={this.props.google}
        zoom={18}
        style={mapStyles}
        initialCenter={{
         lat: 39.0997,
         lng: -94.5786
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_APIKEY
  
})(MapContainer);