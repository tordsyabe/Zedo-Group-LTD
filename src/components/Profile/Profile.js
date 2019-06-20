import React from 'react';
import Aux from '../../hoc/Aux';
import Logo from '../Logo/Logo';

import classes from './Profile.module.css';
import NavItems from '../NavItems/NavItems';
import ProfileContent from './ProfileContent/ProfileContent';

const Profile = props => {
  return (
    <Aux>
      <Logo />
      <NavItems />
      <div className={[classes.Profile, 'wrapper'].join(' ')}>
        <ProfileContent />
      </div>
    </Aux>
  );
};

export default Profile;
