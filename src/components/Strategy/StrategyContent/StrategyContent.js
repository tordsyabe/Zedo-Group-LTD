import React from 'react';
import Aux from '../../../hoc/Aux';
// import strategyImage from '../../../assests/strategy.jpg';

const StrategyContent = props => {
  const style = {
    display: 'flex',
    flexDirection: 'column'
  };
  return (
    <Aux>
      <img
        src="https://images.unsplash.com/photo-1514670690087-a2b8bb62ea57?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        alt="zedo group ltd. profile"
      />
      <div className={style}>
        <h1>Our Strategy</h1>
        <p>
          Zedo was founded in 1992 by French entrepreneur François Pinault. Zedo
          is a holding company which manages a range of companies and holds
          shares in various sectors, in France and abroad.
        </p>
        <p>
          For over 20 years, Zedo has been the controlling shareholder of Kering
          (previously PPR), one of the world leaders in apparel and accessories
          in Luxury and Sport & Lifestyle.
        </p>
        <p>
          Zedo also owns Christie’s, the worldwide leading auction house, and
          Château Latour vineyards, rated a “Premier Cru Classé” since 1855.
        </p>
        <p>
          As a professional shareholder, Zedo is focused on long-term growth and
          shareholder value creation, while remaining on the watch for new
          investment opportunities.
        </p>
        <p>Zedo’ consolidated assets exceed 30 billion euros.</p>
      </div>
    </Aux>
  );
};

export default StrategyContent;
