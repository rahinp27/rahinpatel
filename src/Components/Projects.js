import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import CodeIcon from "@material-ui/icons/Code";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";

const Projects = () => {
  const items = [
    // {
    //   cardTitle: "",
    //   cardDetailedText: [
    //     "",
    //     "",
    //     "",
    //     "",
    //     "",
    //   ].map(function (text) {
    //     return <li>{text}</li>;
    //   }),
    //   technologies: ["", "", "", ""],
    //   links: [
    //     {
    //       url: "",
    //       text: "View Source Code",
    //     },
    //   ],
    // },
    {
      cardTitle: "Architecting ‘e‑commerce‑site‘ Application on AWS",
      cardDetailedText: [
        "Augmented a scalable ‘ e-commerce platform’ on AWS Elastic Beanstalk, increasing reliability by 41% and cutting costs by 30%.",
        "Maintained a 99% uptime by applying AWS Well-Architected Framework, ensuring optimal service selection and architecture.",
        "Boosted security with AWS WAF and KMS, reducing security incidents by 55%.",
        "Resolved CORS errors connecting the React app with AWS Lambda via API Gateway, ensuring seamless integration.",
        "Refined architecture iteratively, boosting performance efficiency by 25% and reducing costs by 23%. (report, video demo)",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["AWS", "React.js", "Latex"],
      links: [
        {
          url: "https://github.com/VikramVenkatapathi/CSCI5902---Advanced-Cloud-Architecting",
          text: "View Source Code",
        },
        {
          url: "https://github.com/VikramVenkatapathi/CSCI5902---Advanced-Cloud-Architecting/blob/main/Documentation/B00936916-Vikram%20Venkatapathi-%20Cloud_Arch_Term_Assignment-%20REPORT-v2.pdf",
          text: "View Report",
        },
        {
          url: "https://drive.google.com/file/d/1zSriZxzGk5e8dBypItgE-zxE3quNaC5q/view",
          text: "View Video Demo",
        },
      ],
    },
    {
      cardTitle: "Automated Deployment and CI/CD Pipeline on GKE with Terraform",
      cardDetailedText: [
        "Containerized Flask applications with Docker, improving communication efficiency by 33%.",
        "Provisioned GKE cluster using Terraform, automating the setup and ensuring consistent resource configuration.",
        "Integrated Google Cloud services, optimizing development workflows and reducing build times by 45%.",
        "Leveraged version control and CI/CD pipelines, maintaining code quality and streamlining deployments by 25%.",
        "Attained all project tasks independently, creating a comprehensive video demo showcasing project functionality.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Terraform", "GCP", "Docker", "Python Flask", "GCP Cloud Build"],
      links: [
        {
          url: "https://github.com/VikramVenkatapathi/CSCI-5409-Adv-Topics-in-Cloud-Computing/blob/main/K8s/readme.md",
          text: "View Source Code",
        },
        {
          url: "https://drive.google.com/file/d/1LDFq-ROxEE98i4-fJ-DoGuslWcXubteR/view",
          text: "View Video Demo",
        },
      ],
    },
    {
      cardTitle: "HappyTummy - Recipe Suggestion Web App",
      cardDetailedText: [
        "Implemented a recipe suggestion web app using Spring Boot and Angular, enhancing user experience and responsiveness by 30%.",
        "Established a CI/CD pipeline with GitLab, Jenkins, and Nginx, reducing deployment time to under 5 minutes.",
        "Collaborated with a cross-functional team of 5 using Agile methodologies, improving project efficiency by 25%.",
        "Leveraged SDLC, SOLID principles, and TDD with JUnit, increasing software reliability and reducing bugs by 40%.",
        "Streamlined development and deployment by integrating Jenkins and Nginx, achieving a 20% boost in CI/CD efficiency.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Java", "Angular.js", "SpringBoot", "Maven", "Jenkins", "GitLab CI/CD", "Nginx" ],
      links: [
        {
          url: "https://github.com/mohit10696/Happy-Tummy",
          text: "View Source Code",
        },
      ],
    },
    
  ];

  const [limit, setLimit] = useState(3);
  const [loadButton, setLoadButton] = useState(true);
  const [lessButton, setLessButton] = useState(false);

  const loadMore = () => {
    setLimit(6);
    setLoadButton(false);
    setLessButton(true);
  };

  const loadLess = () => {
    setLimit(3);
    setLoadButton(true);
    setLessButton(false);
  };

  const addButton = () => (
    <Fab color="primary" color="blue" aria-label="add">
      <AddIcon />
    </Fab>
  );

  return (
    <section id="projects" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Projects</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.slice(0, limit).map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#9FD1C8" }}
                  dateClassName="timeline-date"
                  contentArrowStyle={{
                    borderRight: "7px solid  #FFA500",
                  }}
                  icon={<CodeIcon />}
                  iconStyle={{
                    background: "rgb(102, 252, 241)",
                    color: "#000",
                  }}
                >
                  <div className="projects-technologies">
                    {data.technologies.map((name, i) => (
                      <Chip key={i} label={name}></Chip>
                    ))}
                  </div>
                  <h3
                    className="vertical-timeline-element-title"
                    style={{
                      fontSize: "12",
                      color: "#000000",
                    }}
                  >
                    {data.cardTitle}
                  </h3>
                  <p
                    style={{
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "#000",
                    }}
                  >
                    {data.cardDetailedText}
                  </p>
                  <div className="project-links">
                    {data.links.map((link, j) => (
                      <div>
                        <br></br>
                        <Button
                          key={j} // eslint-disable-line react/no-array-index-key
                          variant="contained"
                          color="default"
                          target="_blank"
                          href={link.url}
                        >
                          {link.text}
                        </Button>
                      </div>
                    ))}
                  </div>
                </VerticalTimelineElement>
              ))}
              {loadButton && (
                <VerticalTimelineElement
                  iconOnClick={loadMore}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <AddIcon
                        style={{
                          // background: "rgb(102, 252, 241)",
                          color: "#000",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "rgb(102, 252, 241)",
                    color: "#fff",
                  }}
                />
              )}
              {lessButton && (
                <VerticalTimelineElement
                  iconOnClick={loadLess}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <RemoveIcon
                        style={{
                          color: "#000",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "rgb(102, 252, 241)",
                    color: "#fff",
                  }}
                />
              )}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
