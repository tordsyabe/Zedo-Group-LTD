import React from 'react';
import classes from './Logo.module.css';

import { NavLink } from 'react-router-dom';
import MobileNavItems from '../NavItems/MobileNav/MobileNavItems';

const Logo = props => {
  return (
    <div className={classes.Logo}>
      <MobileNavItems />
      <NavLink to="/">
        <span className={classes.MainLogo}>Zedo</span>
        <span className={classes.SubLogo}>Group LTD.</span>
      </NavLink>
    </div>
  );
};

export default Logo;
