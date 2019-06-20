import React from 'react';
import NavItem from './NavItem/NavItem';
import Aux from '../../hoc/Aux';
import classes from './NavItems.module.css';

const NavItems = props => {
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
      <nav className={classes.NavItems}>
        <ul>{<NavItem navLabels={navLabels} />}</ul>
      </nav>
    </Aux>
  );
};

export default NavItems;
