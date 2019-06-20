import React from 'react';
import HomeLogo from '../Logo/HomeLogo';
import HomeHeader from './HomeHeader';

import Aux from '../../hoc/Aux';
import NavItems from '../NavItems/NavItems';

const Home = prop => {
  return (
    <Aux>
      <HomeLogo />

      <HomeHeader />
      <NavItems />
    </Aux>
  );
};

export default Home;
