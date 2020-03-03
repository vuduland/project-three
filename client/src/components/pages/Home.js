import React from 'react';
// import { GoogleApiWrapper } from 'google-maps-react';
import Pins from '../pins/Pins';
import PinForm from '../pins/PinForm';
import PinFilter from '../pins/PinFilter';

const Home = () => {
  return (
    // <GoogleApiWrapper/>
    <div className='grid-2'>
      <div>
        <PinForm />
      </div>
      <div>
        <PinFilter />
        <Pins />
      </div>
    </div>
  );
};

export default Home;
