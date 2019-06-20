import React from 'react';
import Aux from '../../hoc/Aux';
import Logo from '../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import StrategyContent from './StrategyContent/StrategyContent';

import classes from './Strategy.module.css';

const Strategy = props => {
  return (
    <Aux>
      <Logo />
      <NavItems />
      <div className={[classes.Strategy, 'wrapper'].join(' ')}>
        <StrategyContent />
      </div>
    </Aux>
  );
};

export default Strategy;
