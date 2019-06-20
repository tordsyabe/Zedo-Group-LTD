import React from 'react';
import Aux from '../../hoc/Aux';
import Logo from '../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import VisionValuesContent from '../VisionValues/VisionValuesContent/VisionValuesContent';

import classes from './VisionValues.module.css';

const VisionValues = props => {
  return (
    <Aux>
      <Logo />
      <NavItems />
      <div className={[classes.VisionValues, 'wrapper'].join(' ')}>
        <VisionValuesContent />
      </div>
    </Aux>
  );
};

export default VisionValues;
