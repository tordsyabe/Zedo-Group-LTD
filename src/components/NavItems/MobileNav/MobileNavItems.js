import React from 'react';
import Aux from '../../../hoc/Aux';

import NavItem from '../NavItem/NavItem';

import classes from './MobileNavItems.module.css';
import { NavLink } from 'react-router-dom';

const MobileNavItems = props => {
  const navLabels = [
    {
      label: 'Our Group',
      subLabels: [
        { label: 'Profile', link: '/profile' },
        { label: 'Corporate Governance', link: '/corporate-governance' }
      ],
      link: '/profile'
    },
    {
      label: 'Our Vision',
      subLabels: [
        { label: 'Vision & Values', link: '/vision-values' },
        { label: 'Our Strategy', link: '/our-strategy' }
      ],
      link: '/vision-values'
    },
    {
      label: 'Our Participation',
      subLabels: [
        { label: 'Mamola Marine Corporation', link: '/mamola/psv' },
        { label: 'Zedo Project Management Services', link: '/zedo-projects' },
        { label: 'Promar Shipping Services', link: '/promar-shipping' }
      ],
      link: '/mamola/psv'
    }
  ];
  return (
    <Aux>
      <input
        type="checkbox"
        id="mobileNavToggle"
        className={classes.MobileNavToggle}
      />
      <label className={classes.MobileNavLabel} htmlFor="mobileNavToggle">
        <span />
      </label>

      <nav className={classes.MobileNavItems}>
        <NavLink to="/" className={classes.MobileNavLogo}>
          Zedo<span>Group LTD.</span>
        </NavLink>
        <ul>{<NavItem navLabels={navLabels} />}</ul>
        <label
          htmlFor="mobileNavToggle"
          style={{
            color: 'var(--text-color)',
            position: 'absolute',
            right: '1rem',
            top: '2rem'
          }}
        >
          <i
            className="fa fa-times fa-lg"
            style={{ webkitTextStroke: '2px white' }}
          />
        </label>
      </nav>
    </Aux>
  );
};

export default MobileNavItems;
