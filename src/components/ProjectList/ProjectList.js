import styles from "./ProjectList.module.css";
import ProjectListItem from "./ProjectListItem/ProjectListItem";
import WeatherAppDemo from "../../assets/WeatherAppDemo.gif";
import RugbyStandingsDemo from "../../assets/RugbyStandingsDemo.gif";
import DiceGameDemo from "../../assets/DiceGameDemo.gif";
import RakaviiDemo from "../../assets/RakaviiDemo.gif";
import CSSMockup0 from "../../assets/CSSMockup0.png";
import CSSMockup1 from "../../assets/CSSMockup1.png";
import CSSMockup2 from "../../assets/CSSMockup2.png";
import CSSMockup3 from "../../assets/CSSMockup3.png";
import PS0 from "../../assets/PS0.png";
import PS1 from "../../assets/PS1.png";
import PS2 from "../../assets/PS2.png";
import PS3 from "../../assets/PS3.png";
import WSNShot from "../../assets/WSNShot.png";
import SoftwareDevShot from "../../assets/SoftwareDevShot.png";

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
        code: "https://github.com/lrvaka/rugbyfeed.io",
      },
      id: 1,
    },
    {
      projectName: "CSS Practice Mockups",
      slides: [
        {
          slideImage: CSSMockup3,
          slideLink: "https://github.com/lrvaka/price-grid-component",
        },
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
        { slideImage: PS3, slideLink: "https://i.imgur.com/xOUpnva.png" },
        { slideImage: PS0, slideLink: "https://i.imgur.com/laUjmzq.png" },
        { slideImage: PS1, slideLink: "https://i.imgur.com/f81n4W8.png" },
        { slideImage: PS2, slideLink: "https://i.imgur.com/SInlWkp.png" },
      ],
      id: 3,
    },
    {
      projectName: "Dice Games",
      demoGif: DiceGameDemo,
      description:
        "My first ever React App, I barley knew what CSS and JS were. Looking back at it, I'm surprised I was able to pull off the game logic with such limited knowledge. Most of the components were pre-made from other libraries. This dice application includes 3 uses - 1v1 highest die, DnD dice, and a best pair game.",
      links: {
        demo: "https://lrvaka.github.io/dice-game.io/",
        code: "https://github.com/lrvaka/dice-game.io",
      },
    },
    {
      projectName: "Rakavii",
      demoGif: RakaviiDemo,
      description:
        "Assisted in revamping the website for relaunch, implemented new design ideas, built new sections, ensured overall design flow. Completed other tasks outside work title. Managed the e-commerce functionality, created multitude of  posters for social media, created new clothing designs, and more.",
      links: {
        demo: "https://www.rakavii.com/",
        drive:
          "https://drive.google.com/file/d/1KQyuxhOugOlOBGyTdzjZshn_FelW5Vmr/view?usp=sharing",
      },
    },
    {
      projectName: "TheRugbyFeed",
      description:
        "Although I no longer maintain these accounts, back in 2016-2017, I decided to create a rugby media curation page where I would create rugby highlight videos, share them, share important news and more! During this time, I was able to curate almost 10k followers, with my most popular video topping 2 million views.",
      links: {
        facebook: "https://www.facebook.com/therugbyfeed/",
        youtube: "https://www.youtube.com/channel/UCtwrXgnGYnaecfN4Vysi2HQ",
      },
      id: 4,
    },
    {
      projectName: "Energy Harvesting in Wearable Wireless Sensor Networks",
      screenshot: WSNShot,
      links: {
        drive:
          "https://drive.google.com/drive/folders/1iYWt5cY3Tk0Uo1SXsb4Y0ZwR_Z2M-iNp?usp=sharing",
      },
      description:
        "One of my favorite projects I've worked on while at school, being able to read through a series of papers that offered solutions in which to harvest energy and power devices in wireless sensor networks. Me and my partner wanted to pick a topic that would apply to everyday people, smart watches were the perfect option. We came up with a solution which allowed us to use a smart watch days on end.",
    },
    {
      projectName: "Software Development: Password Manager",
      screenshot: SoftwareDevShot,
      description:
        "A group of students and I had to go through the different steps of developing a software product. From the research stage to the prototyping stage, our goal was to create the most optimal password manager product. I learned about the various aspects of software development and learned how to curate ideas with other people.",
      links: {
        drive:
          "https://drive.google.com/file/d/1TbiUgMznO8EtfFCVZ-_1Q1jNdhuLRAJR/view?usp=sharing",
      },
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
              screenshot={info.screenshot}
              screenshotLink={info.screenshotLink}
            />
          );
        })}
      </ul>
    </div>
  );
}
