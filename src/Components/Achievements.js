import aws_ccp from "./images/AWS CCP badge.png";
import tf_associate from "./images/TF-Accociate badge.png";
import Button from "@material-ui/core/Button";
import publication_logo from"./images/publication_logo.png";
import Card from "react-bootstrap/Card";

const Achievements = () => {
    const items = [
        {
            img: tf_associate,
            cardTitle: "HashiCorp Certified: Terraform Associate (003)",
            cardText: "Issued on: <br/> April 10, 2024 ",
            btnText: "See Credential",
            btnUrl: "https://www.credly.com/badges/4ec31986-6dc0-404f-a128-f001cb2bb48f",
        },
        {
            img: aws_ccp,
            cardTitle: "AWS Certified Cloud Practitioner",
            cardText: "Issued on: <br/> August 30, 2023 ",
            btnText: "See Credential",
            btnUrl: "https://www.credly.com/badges/acdf0979-eb16-444c-b388-497efa036e59",
        },
        {
            img: publication_logo,
            cardTitle: "Water Quality Prediction using Statistical, Ensemble and Hybrid models",
            cardText: "Date paper accepted: <br/> February 02, 2024 ",
            btnText: "See Publication",
            btnUrl: "https://journal.gnest.org/publication/gnest_05492",
        },
    ];
    return (
        <section id="achievements" class="about background-alt">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>Achievements</h2>
                </div>
                <div class="row">
                    {items.map((data, i) => (
                        <div
                            class="col-sm-3 d-flex justify-content-center"
                            key={i}
                        >
                            {/* <div class="card shadow-large h-100 achievement-card" style={{maxWidth: "270px", background: "#343a40", padding: "20px"}}>
                    <img class="card-img-top responsive" src={data.img} height="50%" width="30%"/>
                  <div class="card-body">
                    <h5 class="card-title" style={{color: "rgba(255, 255, 255, 0.8)", fontSize: "16px"}}>{data.cardTitle}</h5>
                    <p class="card-text" style={{color: "#74808a"}}>{data.cardText}</p>
                    <a href="https://www.credential.net/bef2570d-7d63-4f07-be28-57ec4da87373" target="_blank" class="btn btn-primary">See Credential</a>
                  </div>
                </div> */}
                            <Card
                                style={{
                                    width: "16rem",
                                    background: "#9FD1C8",
                                    padding: "20px",
                                }}
                                className="text-center"
                            >
                                <Card.Img variant="top" src={data.img} />
                                <Card.Body>
                                    <Card.Title
                                        style={{
                                            color: "rgba(0,0,0)",
                                            fontSize: "18px",
                                        }}
                                    >
                                        {data.cardTitle}
                                    </Card.Title>
                                    <br></br>
                                    <Card.Text style={{ color: "#7e8890" }}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: data.cardText,
                                            }}
                                        ></div>
                                    </Card.Text>
                                    {data.btnText && (
                                        <Button
                                            variant="contained"
                                            color="default"
                                            target="_blank"
                                            href={data.btnUrl}
                                        >
                                            {data.btnText}
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                            <br></br>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
