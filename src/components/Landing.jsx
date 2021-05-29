import React from 'react';
import styles from './Landing.module.scss';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';

function Landing() {
  return (
    <>
      <div className={`${styles.mango}`}>
        <div className={`vh-100 ${styles.odd_background}`}>
          <SectionOne />
        </div>
        <div className={`vh-100 ${styles.even_background}`}>
          <SectionTwo />
        </div>
        <div className={`vh-100 ${styles.odd_background}`}>
          <SectionThree />
        </div>
        <div className={`vh-100 ${styles.even_background}`}>
          <SectionFour />
        </div>
      </div>
    </>
  );
}

Landing.propTypes = {};

export default Landing;
