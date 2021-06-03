import React, { useState } from "react";
import styles from "./ProjectListItem.module.css";
import ProjectModal from "../../../UI/ProjectModal/ProjectModal";

export default function ProjectListItem({
  projectName,
  features,
  demoGif,
  slides,
  links,
  description,
  stacks,
  id
}) {
  const [showProjectModal, setShowProjectModal] = useState(false);

  const enableProjectModalHandler = () => {
    setShowProjectModal(true);
  };

  const onExitHandler = () => {
    setShowProjectModal(false);
  };

  return (
    <React.Fragment>
        <ProjectModal
          title={projectName}
          features={features}
          onExit={onExitHandler}
          demoGif={demoGif}
          stacks={stacks}
          slides={slides}
          links={links}
          enabled={showProjectModal}
          description={description}
          id={id}
        />
      <div
        className={styles.ProjectListItem}
        data-aos="slide-right"
        data-aos-once="true"
        onClick={enableProjectModalHandler}
      >
        <li> 
          <h4>{projectName}</h4>
        </li>
      </div>
    </React.Fragment>
  );
}
