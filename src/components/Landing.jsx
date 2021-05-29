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
        <div className="vh-100">
          <SectionOne />
        </div>
        <div className="vh-100">
          <SectionTwo />
        </div>
        <div className="vh-100">
          <SectionThree />
        </div>
        <div className="vh-100">
          <SectionFour />
        </div>
      </div>
    </>
  );
}

Landing.propTypes = {};

export default Landing;
