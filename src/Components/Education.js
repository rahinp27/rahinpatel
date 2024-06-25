import SchoolIcon from "@material-ui/icons/School";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "@material-ui/icons/Star";

const Education = () => {
  const items = [
    {
      cardTitle: "Dalhousie University",
      cardSubtitle: "Master of Applied Computer Science (MACS)",
      // cardDetailedText: "CGPA: 8.51 (First class with Distinction)",
      coursesHead: "Courses: ",
      cardDetailedText: [
        "Advanced Cloud Architecting",
        "Advanced Topics in Software Development",
        "Serverless Data Processing",
        "Advanced Topics in Cloud Computing",
        "Communicating Computer Science Ideas",
        // "Data Management, Warehousing, Analytics",
        // "Designing for UX (User Experience)",
        // "Technology Innovation",
        // "Advanced Topics In Networks",
      ].map(function (course) {
        return <li>{course}</li>;
      }),
      date: "Jan 2023 - Apr 2024",
    },
    {
      cardTitle: "SSN College of Engineering",
      cardSubtitle: "Bachelor's degree, Computer Science Engineering",
      cardDetailedText: "CGPA: 8.51 (First class with Distinction)",
      date: "2018 - 2022",
    },
  ];

  return (
    <section id="education" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Education</h2>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => (
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
                  icon={<SchoolIcon />}
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
                      marginTop: "5px",
                    }}
                  >
                    {data.cardSubtitle}
                  </h4>
                  <h5
                    className="vertical-timeline-element-subtitle"
                    style={{
                      fontSize: "1em",
                      fontWeight: "250",
                      color: "#7e8890",
                      marginTop: "5px",
                    }}
                  >
                    {data.coursesHead}
                  </h5>
                  <p
                    style={{
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "#000000",
                    }}
                  >
                    {data.cardDetailedText}
                  </p>
                </VerticalTimelineElement>
              ))}
              <VerticalTimelineElement
                iconStyle={{
                  background: "rgb(102, 252, 241)",
                  color: "#000",
                }}
                icon={<StarIcon />}
              />
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
