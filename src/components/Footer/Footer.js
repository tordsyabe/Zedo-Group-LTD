import React from 'react';
import classes from './Footer.module.css';

const Footer = props => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Copyright}>Copyright 2019 © Zedo Group LTD.</div>
    </footer>
  );
};

export default Footer;
