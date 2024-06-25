import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <section id="about" class="about background-alt">
      <Container data-aos="fade-up">
        <div class="section-title">
          <h2>About</h2>
        </div>

        <Row>
          <Col lg={5} className="d-flex justify-content-center">
            {/* <img
              src={img}
              height="100%"
              width="50%"
              style={{ borderRadius: "50%" }}
            /> */}
          </Col>
          <Col lg={8} pt={4} className="content">
            <br></br>
            <h3>Cloud / DevOps / Software Engineer.</h3>
            {/* <h5>Quite versatile, ik 😅</h5> */}

            <br></br>
            <p style={{ color: "#728394" }}>
              In my 2nd year of Bachelor's, I felt lost as my peers landed internships in fields like SWE, ML, and Data Analysis. 
              After trying various fields and hating them, I discovered my passion for Cloud Computing☁️ and DevOps♾️. <br/>
              Through hands-on projects, certifications, and numerous mistakes (and hefty cloud bills🥲), I found joy in solving complex problems and continuously learning. <br/>
              My experiences have provided me with a strong technical skill set, the ability to learn quickly, and effectively communicate and collaborate. <br/>
              
            </p>
            <br></br>
            <p style={{ color: "#728394" }}>
            I'm not a typical tech guy who just likes to code🧑‍💻; I explore how my work impacts and drives business success. 📈
            <br/>
            Fun fact: I'm a tall guy who loves and is also good at cooking.🧑‍🍳
            </p>
            <br></br>
            <Row>
              <Col lg={4}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Phone:</strong>{" "}
                    <span>+1 (782)-882-3927</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                    <span>Halifax, Canada</span>
                  </li>
                </ul>
              </Col>
              <Col lg={7}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Degree:</strong>{" "}
                    <span>MACS - Dalhousie University (2023-2024)</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Email:</strong>{" "}
                    <span>
                      <a href="mailto:borolebhushan8@gmail.com">
                      vikramvenkatapathi@gmail.com
                      </a>
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
