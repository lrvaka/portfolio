import styles from "./ProjectList.module.css";
import ProjectListItem from "./ProjectListItem/ProjectListItem";
import WeatherAppDemo from "../../assets/WeatherAppDemo.gif";
import RugbyStandingsDemo from "../../assets/RugbyStandingsDemo.gif";
import CSSMockup0 from "../../assets/CSSMockup0.png";
import CSSMockup1 from "../../assets/CSSMockup1.png";
import CSSMockup2 from "../../assets/CSSMockup2.png";
import PS0 from "../../assets/PS0.png";
import PS1 from "../../assets/PS1.png";
import PS2 from "../../assets/PS2.png";

export default function ProjectList() {
  const projectList = [
    {
      id: 0,
      projectName: "Weather App",
      description:
        "Weather application that utilizes OpenWeatherAPI for up-to-date weather forecasting. Key features include, search by city & country, search by geo-location, and more!",
      demoGif: WeatherAppDemo,
      links: {
        demo: "https://weather-forecast-app679.netlify.app/",
        code: "https://github.com/lrvaka/weather-app-v2",
      },
    },
    {
      projectName: "International Rugby Competition Standings",
      demoGif: RugbyStandingsDemo,
      description:
        "App that allows you to see all up-to-date rugby standings from all the popular competitions around the world. Team icons, records, points, and point differentials all included",
      links: {
        demo: "https://rugby-feed-standings.netlify.app/",
        code: "https://github.com/lrvaka/rugbyfeed.io"
      },
      id: 1,
    },
    {
      projectName: "CSS Practice Mockups",
      slides: [
        {
          slideImage: CSSMockup2,
          slideLink: "https://github.com/lrvaka/css-practice-03",
        },
        {
          slideImage: CSSMockup0,
          slideLink: "https://github.com/lrvaka/css-practice-02",
        },
        {
          slideImage: CSSMockup1,
          slideLink: "https://github.com/lrvaka/css-practice-01",
        },
      ],
      id: 2,
    },
    {
      projectName: "Photoshop Work",
      slides: [
        { slideImage: PS0, slideLink: "https://i.imgur.com/laUjmzq.png" },
        { slideImage: PS1, slideLink: "https://i.imgur.com/f81n4W8.png" },
        { slideImage: PS2, slideLink: "https://i.imgur.com/SInlWkp.png" },
      ],
      id: 3,
    },
    { projectName: "TheRugbyFeed", id: 4 },
    {
      projectName: "Portfolio",
    },
  ];

  return (
    <div className={styles.ProjectList}>
      <h3>Projects</h3>
      <ul>
        {projectList.map((info) => {
          return (
            <ProjectListItem
              key={info.id}
              id={info.id}
              projectName={info.projectName}
              stacks={info.stacks}
              features={info.features}
              description={info.description}
              links={info.links}
              demoGif={info.demoGif}
              slides={info.slides}
            />
          );
        })}
      </ul>
    </div>
  );
}
