import React, { useState, useEffect } from 'react';
import Aux from '../../hoc/Aux';
import MembersList from '../MembersList/MembersList';

import { getZedos } from '../../memberData';

const ZedoContent = props => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers(getZedos());
  }, []);

  const style = {
    display: 'flex',
    flexDirection: 'column'
  };
  return (
    <Aux>
      <div className={style}>
        <h1>Zedo Projects Management Services</h1>
        <div style={{ marginBottom: '2rem' }}>
          <p>Zedo Project Management Services based in Dubai, UAE.</p>
          <p>
            The company offering Ship Owners representative Services such as
            corporate and administrative services, vessel chartering / brokering
            Services, valuation of assets and covering new project and
            construction supervision of assets.
          </p>
          <p>
            We are ready to deliver innovative and pragmatic solutions to
            real-world challenges.
          </p>
        </div>
      </div>
      <MembersList members={members} />
    </Aux>
  );
};

export default ZedoContent;
