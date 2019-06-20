import React from 'react';
import Aux from '../../../hoc/Aux';
// import visionValuesImage from '../../../assests/vision-values.jpg';
import classes from '../VisionValues.module.css';

const VisionValuesContent = props => {
  return (
    <Aux>
      <img
        src="https://images.unsplash.com/photo-1554451194-beff136a9815?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="zedo group ltd. vision and values"
      />
      <div className={classes.VisionValuesContent}>
        <h1>Vision & Values</h1>
        <p>
          <h3>Our Vision</h3>
          "Your best partner at sea."
          <br />
          <br />
          Being the best partner for our clients over time: services, teams,
          vessels, results… Aiming for operational excellence (“Excellence is an
          art won by training and habituation. We are what we repeatedly do.
          Excellence then is not an act but a habit.” Aristotle).
        </p>
        <p>
          <h3>Our Missions</h3>
          "Tailor-made services as performance drivers; safety as a priority."
          <br />
          <br />
          Offering tailor-made and safe solutions that guarantee both Zedo and
          clients’ performance.
        </p>
        <p>
          <h3>Our Ambitions</h3>
          Full dedication to marine safety and client satisfaction. Putting
          <br />
          Trust and Transparency at the core of commercial cooperation.
          <br />
          Encourage local content through hiring & training actions.
        </p>
        <p>
          As a professional shareholder, Zedo is focused on long-term growth and
          shareholder value creation, while remaining on the watch for new
          investment opportunities.
        </p>
        <p>
          <h3>Our Values</h3>
          Professionalism, ambition, performance, respect, responsiveness, team
          spirit.
        </p>
        <p>
          <h3>Our Personality</h3>
          Dynamic, empathic, strong taste for personal effort and job well done
          (efforts-oriented & perseverance).
        </p>
      </div>
    </Aux>
  );
};

export default VisionValuesContent;
