import React from "react";
import ReactDOM from "react-dom";
import "aos/dist/aos.css";
import styles from "./ProjectModal.module.css";
import ExitIcon from "../../assets/ExitIcon.svg";
import PlayIcon from "../../assets/PlayIcon.svg";
import CodeIcon from "../../assets/CodeIcon.svg";
import FacebookIcon from "../../assets/FacebookIcon.svg";
import YoutubeIcon from "../../assets/YoutubeIcon.svg";
import DriveIcon from "../../assets/DriveIcon.svg";
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
  links,
  screenshot,
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
        {screenshot && <img src={screenshot} alt="Loading..." />}
        {description && (
          <div className={styles.Description}>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{description}</p>
          </div>
        )}
        <div className={styles.Information}>
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
                  return (
                    <li>
                      <p>{item}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div className={styles.Links}>
          {links && (
            <React.Fragment>
              {links.demo && (
                <div>
                  <img src={PlayIcon} alt="demo the app" />
                  <h3>
                    <a href={links.demo} target="_blank" rel="noreferrer">
                      Demo
                    </a>
                  </h3>
                </div>
              )}
              {links.code && (
                <div>
                  <img src={CodeIcon} alt="apps code" />
                  <h3>
                    <a href={links.code} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  </h3>
                </div>
              )}
              {links.facebook && (
                <div>
                  <img src={FacebookIcon} alt="facebook link" />
                  <h3>
                    <a href={links.facebook} target="_blank" rel="noreferrer">
                      Facebook
                    </a>
                  </h3>
                </div>
              )}
              {links.youtube && (
                <div>
                  <img src={YoutubeIcon} alt="youtube link" />
                  <h3>
                    <a href={links.youtube} target="_blank" rel="noreferrer">
                      Youtube
                    </a>
                  </h3>
                </div>
              )}
              {links.drive && (
                <div>
                  <img src={DriveIcon} alt="drive link" />
                  <h3>
                    <a href={links.drive} target="_blank" rel="noreferrer">
                      Google Drive
                    </a>
                  </h3>
                </div>
              )}
            </React.Fragment>
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
  links,
  screenshot,
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
          links={links}
          description={description}
          screenshot={screenshot}
          id={id}
          key={id}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default ProjectModal;
