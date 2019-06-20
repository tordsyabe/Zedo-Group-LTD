import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Member.module.css';

const Member = props => {
  return props.profiles.map(profile => (
    <li key={profile.name} className={classes.MemberList}>
      <div>
        <img src={profile.image} alt={profile.name} />
      </div>
      <div className={classes.Position}>
        <Link
          to={{ pathname: `profile/${profile.profileId}`, state: { profile } }}
        >
          {profile.name}
        </Link>
        <label>{profile.position}</label>
      </div>
    </li>
  ));
};

export default Member;
