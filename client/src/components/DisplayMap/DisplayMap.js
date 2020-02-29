import React, { Component, useContext, useEffect } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from '../Map/Map';
// import PinForm from '../pins/PinForm';
// import PinFilter from '../pins/PinFilter';
// import { Row, Col, Icon, CardTitle, Card } from 'react-materialize';
import Pins from '../pinMarker/Pins'



export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    data: 
      [{
        id: '1',
        comment: 'This was dumped here on tuesday',
        lat: 39.076119,
        lng: -94.580249,
        url: './assets/images/moreTrash.jpg'
      }]
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
         <Pins 
          onClick={this.onMarkerClick}
          marker={this.state.activeMarker}
        
          visible={this.state.showingInfoWindow}
         />
        <InfoWindow
          onClick={this.onClose}
          marker={this.state.activeMarker}
        
          visible={this.state.showingInfoWindow}
          
        >
         
        </InfoWindow>
       
      </CurrentLocation>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_APIKEY
})(MapContainer);
