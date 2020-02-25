import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from '../Map/Map';
// import Pins from '../../../../scripts/seedy.json'




export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    data: [
      {
        id: "1",
        address: "123 Addressme, Oregon",
        lat: 38.901016,
        lng: -94.730249,
        url: "alice@abc.com"
      },
      {
        id: "2",
        address: "123 Addressthem, Oregon",
        lat: 38.898524,
        lng: -94.725154,
        url: "aliceabc.com"
      },
      {
        id: "3",
        address: "123 Addressyou, Oregon",
        lat: 38.901123,
        lng: -94.720018,
        url: "alice@abc.com"
      }
    ]
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
        { //curly brace here lets you write javscript in JSX
          this.state.data.map(item =>
            <Marker
              key={item.id}
              address={item.address}
              url={item.url}
              position={{ lat: item.lat, lng: item.lng }}
            />
          )
        }
        <InfoWindow
          marker={this.state.activeMarker}
          onOpen={this.windowHasOpened}
          onClose={this.windowHasClosed}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.url}</h1>
          </div>
        </InfoWindow>
      </CurrentLocation >
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_APIKEY
})(MapContainer);
