import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

export default function Experience() {
  const items = [
    {
      date: "May 2023 - Present",
      cardTitle: "Brenton Suites by WM Fares Group ",
      cardSubtitle: "Front Desk Concierge (part-time)",
      cardDetailedText: [
       "Demonstrated track record of delivering outstanding customer service by greeting and assisting visitors, clients, and staff with a high level of professionalism and attention to detail.",
       "Diligently recorded and reported all incidents and issues related to the building and surrounding areas, contributing to the safety and security of premises and its occupants.",
       "Proficient in multitasking and prioritizing responsibilities to meet residents' needs promptly. Consistently completing daily and weekly tasks on time, ensuring smooth operations and a positive resident experience.",
       "Maintained a high level of ethical standards and professionalism while representing the company, fostering trust among residents, and colleagues",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "Jan 2024 - Apr 2024",
      cardTitle: "BDO Canada LLP",
      cardSubtitle: "DevOps Engineer co-op",
      cardDetailedText: [
        "Devised a node-based workflow using ReactFlow, orchestrating resource deployment for a $1M IaCF project.",
        "Engineered a JSON-based graph representation for seamless backend execution, improving data processing speed by 25%.",
        "Automated Azure resource deployment with Terraform and Docker, enhancing efficiency by 30%.",
        "Facilitated seamless data transfer between nodes and developed a code editor, improving workflow continuity by 20%.",
        "Established artifact storage and automated failure notifications, reducing downtime by 15%."
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    }
    
  ];

  return (
    <section id="experience" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Experience</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => {
                return (
                  <VerticalTimelineElement
                    key={i}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#9FD1C8" }}
                    date={data.date}
                    dateClassName="timeline-date"
                    contentArrowStyle={{
                      borderRight: "7px solid  #FFA500",
                    }}
                    iconStyle={{
                      background: "rgb(102, 252, 241)",
                    color: "#000",
                    }}
                    icon={<WorkIcon />}
                  >
                    <h3
                      className="vertical-timeline-element-title"
                      style={{
                        fontSize: "14",
                        color: "#000000",
                      }}
                    >
                      {data.cardTitle}
                    </h3>
                    <h4
                      className="vertical-timeline-element-subtitle"
                      style={{
                        fontSize: "1.2em",
                        fontWeight: "350",
                        color: "#7e8890",
                      }}
                    >
                      {data.cardSubtitle}
                    </h4>
                    <p
                      style={{
                        fontSize: "1em",
                        fontWeight: "350",
                        color: "#000",
                      }}
                    >
                      {data.cardDetailedText}
                    </p>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}
