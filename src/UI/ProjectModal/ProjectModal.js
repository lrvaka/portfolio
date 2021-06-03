import React from "react";
import ReactDOM from "react-dom";
import "aos/dist/aos.css";
import styles from "./ProjectModal.module.css";
import ExitIcon from "../../assets/ExitIcon.svg";
import transitions from "./ModalTransitions.module.css";
import { CSSTransition } from "react-transition-group";

const Backdrop = ({ onExit, enabled, id }) => {
  return (
    <CSSTransition
      in={enabled}
      unmountOnExit
      classNames={{
        enter: transitions.enter,
        enterActive: transitions.enterActive,
        exit: transitions.exit,
        exitActive: transitions.exitActive,
      }}
      timeout={1000}
      key={id}
    >
      <div className={styles.Backdrop} onClick={onExit} />
    </CSSTransition>
  );
};

const ModalOverlay = ({
  title,
  features,
  onExit,
  demoGif,
  enabled,
  slides,
  description,
  stacks,
  id,
}) => {
  return (
    <CSSTransition
      in={enabled}
      unmountOnExit
      classNames={{
        enter: transitions.enter,
        enterActive: transitions.enterActive,
        exit: transitions.exit,
        exitActive: transitions.exitActive,
      }}
      timeout={1000}
      key={id}
    >
      <div className={styles.Modal}>
        <button onClick={onExit}>
          <img src={ExitIcon} alt="exit modal" />
        </button>
        <h3>{title}</h3>
        {demoGif && <img src={demoGif} alt="Loading..." />}
        {slides && (
          <div className={styles.SlidesWrapper}>
            <div className={styles.Slides}>
              {slides.map((slide) => {
                return (
                  <a href={slide.slideLink} target="_blank" rel="noreferrer">
                    <img
                      data-aos="slide-right"
                      data-aos-once="true"
                      src={slide.slideImage}
                      alt="slide"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        )}
        <div className={styles.Information}>
          {description && (
            <div className={styles.Description}>
              <h4>Description</h4>
              <p>{description}</p>
            </div>
          )}
          {features && (
            <div className={styles.FeatureList}>
              <h4>Features</h4>
              <ul>
                {features.map((item) => {
                  return (
                    <li>
                      <p>{item}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {stacks && (
            <div className={styles.Stacks}>
              <h4>Stacks</h4>
              <ul>
                {stacks.map((item) => {
                  return (<li>
                    <p>{item}</p>
                  </li>)
                })}
              </ul>
            </div>
          )}
        </div>
        <button className={styles.FillerButton} />
        {/* Button used to make the modal even, filling the grid column on the right */}
      </div>
    </CSSTransition>
  );
};

const ProjectModal = ({
  title,
  features,
  onExit,
  demoGif,
  enabled,
  slides,
  description,
  stacks,
  id,
}) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onExit={onExit} enabled={enabled} id={id} key={id} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          features={features}
          onExit={onExit}
          demoGif={demoGif}
          enabled={enabled}
          slides={slides}
          stacks={stacks}
          description={description}
          id={id}
          key={id}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default ProjectModal;
