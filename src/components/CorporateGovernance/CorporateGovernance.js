import React, { useState, useEffect } from 'react';
import Aux from '../../hoc/Aux';
import Logo from '../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import { getDatas } from '../../memberData';
import classes from './CorporateGovernance.module.css';
import MembersList from '../MembersList/MembersList';

const CorporateGovernance = props => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers(getDatas());
  }, []);

  return (
    <Aux>
      <Logo />
      <NavItems />
      <div className={[classes.CorporateGovernance, 'wrapper'].join(' ')}>
        <h1>Corporate Governance</h1>

        <MembersList members={members} />
      </div>
    </Aux>
  );
};

export default CorporateGovernance;
