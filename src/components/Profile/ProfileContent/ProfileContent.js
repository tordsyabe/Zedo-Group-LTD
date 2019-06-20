import React from 'react';
import Aux from '../../../hoc/Aux';
// import profileImage from '../../../assests/profile-content.jpg';

const ProfileContent = props => {
  const style = {
    display: 'flex',
    flexDirection: 'column'
  };
  return (
    <Aux>
      <img
        src="https://images.unsplash.com/photo-1522674149721-b0191358dc5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"
        alt="zedo group ltd. profile"
      />
      <div className={style}>
        <h1>Profile</h1>
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

export default ProfileContent;
