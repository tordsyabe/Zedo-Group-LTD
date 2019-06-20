import React from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Fleet.module.css';

const Fleet = props => {
  console.log(props.fleet.specs);
  return (
    <Aux>
      <div className={classes.Fleet}>
        <label htmlFor={props.fleet.name}>
          <div className={classes.FleetCard}>
            <img src={props.fleet.image} alt={props.fleet.name} />

            <div className={classes.Details}>
              <h5>{props.fleet.name}</h5>
              <i className="fa fa-ellipsis-v" aria-hidden="true" />
            </div>
            <input
              type="checkbox"
              id={props.fleet.name}
              name={props.fleet.name}
              className={classes.FleetLabelToggle}
            />
            <div className={classes.FleetSpecification}>
              <p>
                <strong>Basic Specifications</strong>
              </p>
              <br />
              <p>
                <span style={{ color: 'var(--accent-color)' }}>
                  {props.fleet.name}
                </span>
              </p>
              <br />
              {props.fleet.specs.map((spec, index) => (
                <p key={index}>{spec}</p>
              ))}
            </div>
          </div>
        </label>
      </div>
    </Aux>
  );
};

export default Fleet;
