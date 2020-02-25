import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from '../Map/Map';
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';
// import Pins from '../../../../scripts/seedy.json'




export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    data: [
      {
        id: "1",
        comment: "This was dumped here on tuesday",
        lat: 38.901016,
        lng: -94.730249,
        url: "https://picsum.photos/200/300/?blur"
      },
      {
        id: "2",
        comment: "Hey this needs to be cleaned up",
        lat: 38.898524,
        lng: -94.725154,
        url: "https://picsum.photos/id/870/200/300?grayscale&blur=2"
      },
      {
        id: "3",
        comment: "Who wants to get some Karma #Trashtag # reddit",
        lat: 38.901123,
        lng: -94.720018,
        url: "https://picsum.photos/200/300?grayscale"
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
          <Row>
            <Col
              m={6}
              s={12}
            >
              <Card
                actions={[
                  <a key="1" href="#">Test</a>
                ]}
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={this.state.selectedPlace.url} />}
                horizontal
                revealIcon={<Icon>more_vert</Icon>}
              >
                {this.state.selectedPlace.comment}
              </Card>
            </Col>
          </Row>
          <div>
            <h5></h5>

          </div>
        </InfoWindow>
      </CurrentLocation >
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_APIKEY
})(MapContainer);
