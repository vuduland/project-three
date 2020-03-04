import React, { Fragment, useContext, useEffect } from 'react';
import { TransitionGroup } from 'react-transition-group';
import Spinner from '../layout/Spinner';
import PinContext from '../../context/pin/pinContext';
import { Marker } from 'google-maps-react';
const Pins = () => {
  const pinContext = useContext(PinContext);

  const { pins, filtered, getPins, loading } = pinContext;

  useEffect(() => {
    getPins();
    // eslint-disable-next-line
  }, []);

  if (pins !== null && pins.length === 0 && !loading) {
    return <h4>No Trash Yet</h4>;
  }

  return (
    <Fragment>
      {pins !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(pin => (
              <Marker
              onClick={this.onMarkerClick}
                key={pin._id}
                name={pin.name}
                url={pin.url}
                position={{ lat: pin.lat, lng: pin.lng }}
                timeout={500}
                classNames='item'
              >
              </Marker>
            ))
            : pins.map(pin => (
              <Marker
                key={pin._id}
                name={pin.name}
                url={pin.url}
                position={{ lat: pin.lat, lng: pin.lng }}
                timeout={500}
                classNames='item'
              >
              </Marker>
            ))}
        </TransitionGroup>
      ) : (
          <Spinner />
        )}
    </Fragment>
  );
};

export default Pins;
