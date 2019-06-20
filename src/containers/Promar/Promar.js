import React from 'react';
import Aux from '../../hoc/Aux';
import NavItems from '../../components/NavItems/NavItems';

import classes from '../Participation.module.css';
import PromarContents from '../../components/PromarContent/PromarContents';

import promarImage from '../../assests/promar-background.jpg';
import Logo from '../../components/Logo/Logo';

const Promar = props => {
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

          <img src={promarImage} alt="mamola" />
          <a
            className={classes.PromarLink}
            href="http://www.promar-offshore.com/promar/English/home.html"
          >
            www.promar-offshore.com
          </a>
          <i class="fa fa-youtube" aria-hidden="true" />
        </div>
        <div className={classes.ParticipationContent}>
          <NavItems />
          <PromarContents />
        </div>
      </div>
    </Aux>
  );
};

export default Promar;
