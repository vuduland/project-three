import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from '../Map/Map';
// import PinForm from '../pins/PinForm';
// import PinFilter from '../pins/PinFilter';
// import { Row, Col, Icon, CardTitle, Card } from 'react-materialize';
// import Pins from '../pinMarker/Pins'



export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker 
    data: [
      {
        id: "1",
        comment: "This was dumped here on tuesday",
        lat: 39.076119,
        lng: -94.580249,
        url: "./assets/images/moreTrash.jpg"
      },
      {
        id: "2",
        comment: "Hey this needs to be cleaned up",
        lat: 39.075186,
        lng: -94.570229,
        url: "../assets/images/moreTrash.jpg"
      },
      {
        id: "3",
        comment: "Who wants to get some Karma #Trashtag # reddit",
        lat: 39.074314,
        lng: -94.572624,
        url: "./assets/images/trashpanda.png"
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
              onClick={this.onMarkerClick}
              key={item.id}
              comment={item.comment}
              address={item.address}
              url={item.url}
              position={{ lat: item.lat, lng: item.lng }}
            />
          )
        }
        <InfoWindow
          onClick={this.onClose}
          marker={this.state.activeMarker}
          onOpen={this.windowHasOpened}
          onClose={this.windowHasClosed}
          visible={this.state.showingInfoWindow}>
         <div>
            <img src={this.state.selectedPlace.url} class="img-fluid" alt= {this.state.selectedPlace.comment}/>

            </div>
          {this.state.selectedPlace.comment}
        </InfoWindow>

      </CurrentLocation>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_APIKEY
})(MapContainer);
