/** @format */

import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PinItem from './PinItem';
import PinContext from '../../context/pins/pinContext';

const Pins = () => {
  const pinContext = useContext(PinContext);

  const { pins, filtered, getPins, loading } = pinContext;

  useEffect(() => {
    getPins();
    // eslint-disable-next-line
  }, []);

  // if there are no pins, returns a message

  if (pins !== null && pins.length === 0 && !loading) {
    return <h4>Please add a pin</h4>;
  }

  return (
    <Fragment>
      {/* <TransitionGroup> */}
      {/* {filtered !== null
          ? filtered.map(pin => (
              <CSSTransition key={pin._id} timeout={500} classNames='item'> */}
      {/* <PinItem constact={pin} /> */}
      {/* </CSSTransition> */}
      {/* ))
          : pins.map(pin => (
              <CSSTransition key={pin._id} timeout={500} classNames='item'>
                <PinItem pin={pin} />
              </CSSTransition> */}
      {/* </TransitionGroup> */}
    </Fragment>
  );
};

export default Pins;
