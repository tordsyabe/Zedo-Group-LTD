import React from 'react';
import Aux from '../../hoc/Aux';
import NavItems from '../../components/NavItems/NavItems';

import classes from '../Participation.module.css';
import ZedoContent from '../../components/ZedoContent/ZedoContent';
import Logo from '../../components/Logo/Logo';

const Zedo = props => {
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
            src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            alt="mamola"
          />
        </div>
        <div className={classes.ParticipationContent}>
          <NavItems />
          <ZedoContent />
        </div>
      </div>
    </Aux>
  );
};

export default Zedo;
