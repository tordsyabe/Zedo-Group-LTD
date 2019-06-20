import React, { useState } from 'react';
import Fleet from '../Fleet/Fleet';

import classes from '../Fleets.module.css';

const Psv = props => {
  const [property, setProperty] = useState(props.psvFleet[0]);

  const nextButton = () => {
    const newIndex = property.index + 1;
    setProperty(props.psvFleet[newIndex]);
  };

  const prevButton = () => {
    const newIndex = property.index - 1;
    setProperty(props.psvFleet[newIndex]);
  };
  return (
    <div>
      <button
        className={classes.Left}
        onClick={prevButton}
        disabled={property.index === 0}
      >
        <i className="fa fa-angle-left fa-2x" aria-hidden="true" />
      </button>
      <div className={classes.Slider}>
        <div
          className={classes.SliderWrapper}
          style={{
            transform: `translateX(-${property.index *
              (100 / props.psvFleet.length)}%)`
          }}
        >
          {props.psvFleet.map((fleet, index) => (
            <Fleet key={index} fleet={fleet} index={index} />
          ))}
        </div>
      </div>
      <button
        className={classes.Right}
        onClick={nextButton}
        disabled={property.index === props.psvFleet.length - 1}
      >
        <i className="fa fa-angle-right fa-2x" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Psv;
