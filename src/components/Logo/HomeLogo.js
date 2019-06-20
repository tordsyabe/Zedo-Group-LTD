import React from 'react';
import classes from './HomeLogo.module.css';

import { NavLink } from 'react-router-dom';
import MobileNavItems from '../NavItems/MobileNav/MobileNavItems';

const HomeLogo = props => {
  return (
    <div className={classes.HomeLogo}>
      <MobileNavItems />
      <NavLink to="/">
        <span className={classes.HomeMainLogo}>Zedo</span>
        <span className={classes.HomeSubLogo}>Group LTD.</span>
      </NavLink>
    </div>
  );
};

export default HomeLogo;
