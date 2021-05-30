import React from 'react';
import landingStyles from './Landing.module.scss';
import styles from './SectionFour.module.scss';
import { ReactComponent as Mango } from './mango.svg';
import { ReactComponent as WhatsappIcon } from './whatsapp.svg';
// import { ReactComponent as Background } from './background.svg';

export default function SectionFour() {
  return (
    <div className={styles.image_background}>
      <div className={`${landingStyles.fourth_color}  container`}>
        <div className={`${styles.heading}`}>
          <h2 className="fw-bold mb-0">Order your delicious pack now</h2>
        </div>
        <div className={`${styles.grid_container} m-0 p-0 pt-4`}>
          <div className={`${styles.item_one}`}>
            <div>
              <div className="row p-4">
                <div className={`col btn button btn-primary ${styles.button} me-1`}>
                  <a
                    className={`${styles.anchor}`}
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className={`mb-0 ${styles.button_text}`}>
                      chat <WhatsappIcon className={`ms-4 ${styles.whatsapp}`} />
                    </h4>
                  </a>
                </div>
                <div className={`col btn button btn-primary ${styles.button} ms-1`}>
                  <a className={`${styles.anchor}`} href="/#" target="_blank" rel="noreferrer">
                    <h4 className={`mb-0 no-wrap ${styles.button_text}`}>form</h4>
                  </a>
                </div>
              </div>
              <div className="row text-start m-0 p-0">
                <div className={`${styles.address_card}`}>
                  <p className="mb-0 p-0">
                    <span className="row p-0 m-0">Email: random@gmail.com</span>
                    <span className="row p-0 m-0">+01 - 9999999999</span>
                    <span className="row p-0 m-0">+01 - 9999999999</span>
                    <span className="row p-0 m-0 text-start">
                      Location - Uddanapalli, krishnagiri District of Tamilnadu, Masth Mango Farm is
                      60 km away from Bangalore.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.item_two}`}>
            <Mango className={styles.mango} />
          </div>
        </div>
      </div>
    </div>
  );
}
