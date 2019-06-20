import React from 'react';
import Aux from '../../../hoc/Aux';
import classes from '../../NavItems/NavItems.module.css';

import { NavLink } from 'react-router-dom';

const NavItem = props => {
  return props.navLabels.map((navLabel, index) => (
    <Aux key={index}>
      <li>
        <NavLink to={navLabel.link}>{navLabel.label}</NavLink>
        <nav>
          <ul>
            {navLabel.subLabels.map(subLabel => (
              <li key={subLabel.label}>
                <NavLink to={subLabel.link} activeClassName={classes.active}>
                  {subLabel.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </li>
    </Aux>
  ));
};

export default NavItem;
