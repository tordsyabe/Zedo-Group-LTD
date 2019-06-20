import React from 'react';
import Member from './Member/Member';

import classes from './MembersList.module.css';

const MembersList = props => {
  return props.members.map(member => (
    <div key={member.group} className={classes.Content}>
      <h3>{member.group}</h3>
      <ul className={classes.MembersList}>
        <Member profiles={member.profile} />
      </ul>
    </div>
  ));
};

export default MembersList;
