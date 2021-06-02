import styles from "./Body.module.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import LinkedInIcon from "../../assets/LinkedInIcon.svg";
import GitHubIcon from "../../assets/GitHubIcon.svg";
import EmailIcon from "../../assets/EmailIcon.svg";
import ResumeIcon from "../../assets/ResumeIcon.svg";
import ProjectList from "../../components/ProjectList/ProjectList";
import React from "react";

export default function Body() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-once="true" className={styles.Body}>
      <div className={styles.AboutMe}>
        <h3>About Me</h3>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp; Hello, my name is Luke Vakasisikakala. I'm a
          driven, detail-oriented software developer specializing in web
          development and content creation. I graduated from Saint Bonaventure
          in December 2020 with a B.S. in Computer Science, where I learned
          skills and concepts ranging from Algorithms & Data Structure, Database
          Management Systems, to Software Development and Wireless Sensor
          Networks. As of recent I've focused my attention on web development
          and content creation. I specialize in React JS & CSS which allows me
          to create simple & powerful web experiences. I worked as a web
          designer for a small company, Rakavii, where I revamped their web
          presence and e-commerce functionalities. During my free time, I create
          projects and learn new technologies. Although I enjoy software
          development, I more so enjoy creating & designing experiences that
          incite positive reactions from users.
        </p>
      </div>
      <ProjectList />
      <div className={styles.SkillsList}>
        <h3>Skills & Technologies</h3>
        <ul>
          <li>
            <h5>React JS</h5>
          </li>
          <li>
            <h5>Vanilla Javascript</h5>
          </li>
          <li>
            <h5>CSS</h5>
          </li>
          <li>
            <h5>HTML</h5>
          </li>
          <li>
            <h5>Git</h5>
          </li>
          <li>
            <h5>Photoshop</h5>
          </li>
        </ul>
      </div>
      <div className={styles.RightSection}>
        <div className={styles.ContactMe}>
          <h3>Contact</h3>
          <ul>
            <li>
              <img src={EmailIcon} alt="email me" />
              <h5>
                <a
                  href="mailto:lrvaka@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  &nbsp;Email
                </a>
              </h5>
            </li>
            <li>
              <img src={LinkedInIcon} alt="LinkedIn Profile" />
              <h5>
                <a
                  href="https://www.linkedin.com/in/luke-vakasisikakala-329a6b162/"
                  target="_blank"
                  rel="noreferrer"
                >
                  &nbsp;LinkedIn
                </a>
              </h5>
            </li>
            <li>
              <img src={GitHubIcon} alt="GitHub Profile" />
              <h5>
                <a
                  href="https://github.com/lrvaka"
                  target="_blank"
                  rel="noreferrer"
                >
                  &nbsp;GitHub
                </a>
              </h5>
            </li>
            <li>
              <img src={ResumeIcon} alt="My resume" />
              <h5>
                <a
                  href="https://drive.google.com/file/d/1vsHzhpuS9YA5scHIgbaZwYvjDGdD8gp0/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  &nbsp;Resume
                </a>
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
