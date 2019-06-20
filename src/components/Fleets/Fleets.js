import React, { useState } from 'react';
import Aux from '../../hoc/Aux';

import { Route, NavLink, Switch } from 'react-router-dom';
import classes from './Fleets.module.css';
import Psv from './PSV/Psv';
import Mpsv from './MPSV/Mpsv';
import Fcb from './FCB/Fcb';

import challenger from '../../assests/fleets/challenger.png';
import champion from '../../assests/fleets/champion.png';
import melody from '../../assests/fleets/melody.png';
import responder from '../../assests/fleets/responder.png';
import serenity from '../../assests/fleets/serenity.png';

import reliance from '../../assests/fleets/reliance.jpg';
import defender from '../../assests/fleets/defender.png';

import fcb1 from '../../assests/fleets/fcb-1.jpg';
import fcb2 from '../../assests/fleets/fcb-2.jpg';

const Fleets = props => {
  const [mpsvFleet] = useState([
    {
      index: 0,
      name: 'Mamola Challenger',
      image: challenger,
      specs: [
        'Built: 2006',
        'Flag / P.O.R.: SVG / Kingstown',
        'GT / NT: 1,408 / 422',
        'Length overall: 57.50m',
        'Beam: 13.80m',
        'Moulded depth: 5.5m',
        'Summer draft / Deadweight: 4.8m / 1,330MT',
        'Total accommodation: 62 beds'
      ]
    },
    {
      index: 1,
      name: 'Mamola Champion',
      image: champion,
      specs: [
        'Built: 2009',
        'Flag / P.O.R.: Republic of the Marshall Islands / Majuro',
        'GT / NT: 1,527 / 458',
        'Length overall: 58.70m',
        'Beam: 14.60m',
        'Moulded depth: 5.5m',
        'Summer draft / Deadweight: 4.75m / 1,368MT',
        'Total accommodation: 64 beds'
      ]
    },
    {
      index: 2,
      name: 'Mamola Melody',
      image: melody,
      specs: [
        'Built: 2009',
        'Flag / P.O.R.: Republic of the Marshall Islands / Majuro',
        'GT / NT: 1,527 / 458',
        'Length overall: 58.70m',
        'Beam: 14.60m',
        'Moulded depth: 5.5m',
        'Summer draft / Deadweight: 4.75m / 1,368MT',
        'Total accommodation: 64 beds'
      ]
    },
    {
      index: 3,
      name: 'Mamola Responder',
      image: responder,
      specs: [
        'Built: 1993',
        'Flag / P.O.R.: SVG / Kingstown',
        'GT / NT: 1,341 / 402',
        'Length overall: 65.90m',
        'Beam: 13.42m',
        'Moulded depth: 5.18m',
        'Summer draft / Deadweight: 4.27m / 1,112MT',
        'Total accommodation: 64 beds'
      ]
    },
    {
      index: 4,
      name: 'Mamola Serenity',
      image: serenity,
      specs: [
        'Built: 2010',
        'Flag / P.O.R.: Republic of the Marshall Islands',
        'GT / NT: 3,100 / 1,000',
        'Length overall: 85m',
        'Beam: 20m',
        'Moulded depth: 7m',
        'Summer draft / Deadweight: 5m / 2,000MT',
        'Total accommodation: 126 beds'
      ]
    }
  ]);

  const [psvFleet] = useState([
    {
      index: 0,
      name: 'Mamola Reliance',
      image: reliance,
      specs: [
        'Built: 2015',
        'Flag / P.O.R.: Malta / Valletta',
        'GT / NT: 3,800 / 1,100',
        'Length overall: 80.10m',
        'Beam: 16.20m',
        'Moulded depth: 7.50m',
        'Summer draft / Deadweight: 6.00m / 3,300T'
      ]
    },
    {
      index: 1,
      name: 'Mamola Defender',
      image: defender,
      specs: [
        'Built: 2015',
        'Flag / P.O.R.: Malta / Valletta',
        'GT / NT: 3,800 / 1,100',
        'Length overall: 80.10m',
        'Beam: 16.20m',
        'Moulded depth: 7.50m',
        'Summer draft / Deadweight: 6.00m / 3,300T'
      ]
    }
  ]);

  const [fcbFleet] = useState([
    {
      index: 0,
      name: 'Mamolino 20M (7 Units)',
      image: fcb1,
      specs: [
        'Built: 2011',
        'Flag / P.O.R.: Malta / Valletta',
        'GT: 46.8',
        'Length overall: 19.77m',
        'Beam: 5m',
        'Moulded depth: 1.6m',
        'Summer draft / Deadweight: 0.92m / 8.54MT',
        'Passengers: 30'
      ]
    },
    {
      index: 1,
      name: 'Mamolino 20M-2S (> 20 Units)',
      image: fcb2,
      specs: [
        'Built: 2012',
        'Flag / P.O.R.: Malta / Valletta',
        'GT: ~47T',
        'Length overall: 19.93m',
        'Beam: 4.95m',
        'Moulded depth: 2.30m',
        'Summer draft / Deadweight: ~1m / 9T',
        'Passengers: 30'
      ]
    }
  ]);

  return (
    <Aux>
      <h1>Mamola Marine Corporation</h1>
      <p
        style={{
          fontSize: '0.8rem',
          color: 'var(--text-color)'
        }}
      >
        Mamola Marine Corporation is an independent shipping company based in
        Panama.
      </p>

      <p
        style={{
          fontSize: '0.8rem',
          color: 'var(--text-color)',
          marginTop: 0
        }}
      >
        We are active Ship Owners, working closely with our third-party
        technical management to ensure our assets are well maintained and meet
        industry and environmental standards.
      </p>
      <p
        style={{
          fontSize: '0.8rem',
          color: 'var(--text-color)',
          marginTop: 0
        }}
      >
        We provide modern Multipurpose Vessel, Platform Supply Vessel and Fast
        Crew.
      </p>

      <div className={classes.Fleets}>
        <nav>
          <ul>
            <li>
              <NavLink to="/mamola/psv" activeClassName={classes.active}>
                Platform Supply Vessel
              </NavLink>
            </li>
            <li>
              <NavLink to="/mamola/mpsv" activeClassName={classes.active}>
                Multi-Purpose Supply Vessel
              </NavLink>
            </li>
            <li>
              <NavLink to="/mamola/fcb" activeClassName={classes.active}>
                Fast Crew Boat
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route
            path="/mamola/psv"
            component={() => <Psv psvFleet={psvFleet} />}
          />
          <Route
            path="/mamola/mpsv"
            component={() => <Mpsv mpsvFleet={mpsvFleet} />}
          />
          <Route
            path="/mamola/fcb"
            component={() => <Fcb fcbFleet={fcbFleet} />}
          />
        </Switch>
      </div>
    </Aux>
  );
};

export default Fleets;
