import React from 'react';
import Aux from '../../hoc/Aux';
import NavItems from '../../components/NavItems/NavItems';
import Fleets from '../../components/Fleets/Fleets';
import classes from '../Participation.module.css';
import Logo from '../../components/Logo/Logo';

const Mamola = props => {
  return (
    <Aux>
      <div className={classes.MobileLogo}>
        <Logo />
      </div>
      <div className={classes.Participation}>
        <div className={classes.ParticipationContainer}>
          <div className={classes.Logo}>
            <Logo />
          </div>
          <img
            src="https://images.unsplash.com/photo-1553174915-246987e22bfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            alt="mamola"
          />
        </div>
        <div className={classes.ParticipationContent}>
          <NavItems />
          <Fleets />
        </div>
      </div>
    </Aux>
  );
};

export default Mamola;
