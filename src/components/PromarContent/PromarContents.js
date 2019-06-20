import React, { useState, useEffect } from 'react';
import Aux from '../../hoc/Aux';
import MembersList from '../MembersList/MembersList';

import { getPromars } from '../../memberData';

const PromarContents = props => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers(getPromars());
  }, []);

  const style = {
    display: 'flex',
    flexDirection: 'column'
  };
  return (
    <Aux>
      <div className={style}>
        <h1>Promar Shipping Services</h1>
        <div style={{ marginBottom: '2rem' }}>
          <p>
            Promar Shipping Services SA was incorporated in 2002 with head
            office in Geneva as an independent organization specialising in ship
            operations.
          </p>
          <p>
            Based on experiences with vessels chartering and the maintenance
            business in the oil industry, Promar Shipping Services SA naturally
            headed for managing offshore vessels, practising the same policy of
            high Standards of quality and Safety and keeping in mind the
            particular expectations and needs of the offshore oil and gas
            industry.
          </p>
          <p>
            Thanks to a knowledgeable staff with broad expertise in the
            management of offshore vessels, Promar Shipping Services SA ensures
            the supervision of the fleet.
          </p>
          <p>
            The fully dedicated and qualified personnel cover all the various
            competencies of the Ship Management business. All the services
            provided including QHSE, chartering, operations, crewing, technical,
            purchasing, insurances services, focus on customer satisfaction,
            charterer expectations and are guided by marine safety and safe
            working practices.
          </p>
        </div>
      </div>
      <MembersList members={members} />
    </Aux>
  );
};

export default PromarContents;
