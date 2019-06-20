import React, { useState } from 'react';
import Fleet from '../../Fleets/Fleet/Fleet';

import classes from '../Fleets.module.css';

const Mpsv = ({ mpsvFleet }) => {
  const [property, setProperty] = useState(mpsvFleet[0]);

  const nextButton = () => {
    const newIndex = property.index + 1;
    setProperty(mpsvFleet[newIndex]);
  };

  const prevButton = () => {
    const newIndex = property.index - 1;
    setProperty(mpsvFleet[newIndex]);
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
              (100 / mpsvFleet.length)}%)`
          }}
        >
          {mpsvFleet.map((fleet, index) => (
            <Fleet key={index} fleet={fleet} index={index} />
          ))}
        </div>
      </div>
      <button
        className={classes.Right}
        onClick={nextButton}
        disabled={property.index === mpsvFleet.length - 1}
      >
        <i className="fa fa-angle-right fa-2x" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Mpsv;
