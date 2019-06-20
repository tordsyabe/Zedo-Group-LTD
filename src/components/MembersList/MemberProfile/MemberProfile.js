import React from 'react';

import classes from './MemberProfile.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../../NavItems/NavItems';
import Aux from '../../../hoc/Aux';

const MemberProfile = props => {
  console.log(props.location.state.profile);

  return (
    <Aux>
      <Logo />
      <NavItems />
      <div className={[classes.MemberProfile, 'wrapper'].join(' ')}>
        <img
          src={props.location.state.profile.image}
          alt="zedo group ltd. profile"
        />
        <div className={classes.MemberProfileContent}>
          <h1>{props.location.state.profile.name}</h1>
          <h4>{props.location.state.profile.position}</h4>
          {props.location.state.profile.contents.map((content, index) => (
            <p key={index}>{content}</p>
          ))}
        </div>
      </div>
    </Aux>
  );
};

export default MemberProfile;
