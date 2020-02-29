import React, { Fragment, useContext, useEffect } from 'react';
// import PinItem from './pins/PinItem';
import PinContext from '../../context/pin/pinContext';
import { Marker } from 'google-maps-react'




const PinMarkers = () => {
  const pinContext = useContext(PinContext);

  const { pins, getPins, loading } = pinContext;

  useEffect(() => {
    getPins();
    // eslint-disable-next-line
  }, []);

  if (pins !== null && pins.length === 0 && !loading) {
    return <h4>No Trash Yet</h4>;
  }

  return (
   
    <Fragment>
      {
        pins.map(pin => 
          <Marker
            key={pin._id}
            // position={{ lat: pin.lat, lng: pin.lng }}
        
          >
          </Marker>
        )
      }
    </Fragment>
  
  )
    };

  export default PinMarkers;
