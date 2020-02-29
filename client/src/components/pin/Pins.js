import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PinItem from './PinItem';
import Spinner from '../Layout/Spinner';
import PinContext from '../../context/pin/pinContext';

const Pins = () => {
  const pinContext = useContext(PinContext);

  const { pins, filtered, getPins, loading } = pinContext;

  useEffect(() => {
    getPins();
    // eslint-disable-next-line
  }, []);

  if (pins !== null && pins.length === 0 && !loading) {
    return <h4>Please add a pin</h4>;
  }

  return (
    <Fragment>
      {pins !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(pin => (
                <CSSTransition
                  key={pin._id}
                  timeout={500}
                  classNames='item'
                >
                  <PinItem pin={pin} />
                </CSSTransition>
              ))
            : pins.map(pin => (
                <CSSTransition
                  key={pin._id}
                  timeout={500}
                  classNames='item'
                >
                  <PinItem pin={pin} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Pins;
