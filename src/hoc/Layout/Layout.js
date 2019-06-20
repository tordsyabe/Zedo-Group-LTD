import React from 'react';

import Aux from '../Aux';
import Home from '../../components/Home/Home';
import Footer from '../../components/Footer/Footer';
import Profile from '../../components/Profile/Profile';
import Mamola from '../../containers/Mamola/Mamola';
import VisionValues from '../../components/VisionValues/VisionsValues';
import CorporateGovernance from '../../components/CorporateGovernance/CorporateGovernance';

import classes from './Layout.module.css';

import { Route, Switch } from 'react-router-dom';
import MemberProfile from '../../components/MembersList/MemberProfile/MemberProfile';
import Zedo from '../../containers/Zedo/Zedo';
import Strategy from '../../components/Strategy/Strategy';
import Promar from '../../containers/Promar/Promar';

const Layout = props => {
  return (
    <Aux>
      <main className={classes.Main}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} /> />
          <Route path="/corporate-governance" component={CorporateGovernance} />
          <Route path="/vision-values" component={VisionValues} />
          <Route path="/our-strategy" component={Strategy} />
          <Route path="/mamola" component={Mamola} />
          <Route path="/zedo-projects" component={Zedo} />
          <Route path="/promar-shipping" component={Promar} />
          <Route path="/profile/:id" component={MemberProfile} />
        </Switch>
      </main>
      <Footer />
    </Aux>
  );
};

export default Layout;
