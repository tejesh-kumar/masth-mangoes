import React from 'react';
import styles from './Landing.module.scss';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';

function Landing() {
  return (
    <>
      <div className={`container ${styles.mango}`}>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </>
  );
}

Landing.propTypes = {};

export default Landing;
