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
      features: [
        "5-day forecast",
        "Today's Weather",
        "Search by city & country",
        "Search by geo-location",
        "Hi-Temp, Low-Temp, feels-like & humidity information",
        "Weather icons & description",
      ],
      stacks: ["React JS", "CSS", "OpenWeatherAPI"],
      demoGif: WeatherAppDemo,
    },
    {
      projectName: "International Rugby Competition Standings",
      demoGif: RugbyStandingsDemo,
      features: [
        "Dropdown menu selection",
        "All popular international rugby comps",
        "Tables separated by conference if available",
      ],
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
    }
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
              features={info.features}
              demoGif={info.demoGif}
              slides={info.slides}
            />
          );
        })}
      </ul>
    </div>
  );
}
