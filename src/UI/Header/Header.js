import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import transitions from "./ModalTransitions.module.css";
import styles from "./Header.module.css";
import { CSSTransition } from "react-transition-group";
import ProfileImage from "../../assets/ProfileImage.jpg";
import blob from "../../assets/blob.svg";
import ArrowDown from "../../assets/ArrowDown.svg";
import blob1 from "../../assets/blob-1.svg";
import blob2 from "../../assets/blob-2.svg";

export default function Header() {
  const [visible, setVisible] = useState(true);

  const delay = 10000;

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, delay);
  }, [delay]);

  return (
    <div data-aos="fade-up" className={styles.Header}>
      <img
        data-aos="fade-down"
        data-aos-delay="2000"
        src={ProfileImage}
        alt="personal head shot"
      />
      <img data-aos="fade-up" data-aos-delay="1000" src={blob} alt="blob" />
      <img data-aos="fade-up" data-aos-delay="1250" src={blob1} alt="blob1" />
      <img data-aos="fade-up" data-aos-delay="1500" src={blob2} alt="blob2" />
      <h2 data-aos="fade-up" data-aos-delay="3000">
        Recent computer science B.S. graduate, software developer specializing
        in web development and content creation
      </h2>
      <CSSTransition
        in={visible}
        unmountOnExit
        classNames={{
          enter: transitions.enter,
          enterActive: transitions.enterActive,
          exit: transitions.exit,
          exitActive: transitions.exitActive,
        }}
        timeout={delay}
      >
        <React.Fragment>
          <img src={ArrowDown} alt="Arrow down" />
        </React.Fragment>
      </CSSTransition>
    </div>
  );
}
