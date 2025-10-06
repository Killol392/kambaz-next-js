import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row
} from "react-bootstrap";

export default function Dashboard() {
  return (
    <Container id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h1 id="wd-dashboard-published">Published Courses (10)</h1>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course">
            <Card>
              <Link
                href="/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/reactjs.jpg"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS1234 React JS
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden">
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card>
              <Link
                href="/Courses/4567/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/cs5800.jpg"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS5800 Algorithms
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden">
                    Design and analysis of algorithms
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card>
              <Link
                href="/Courses/7890/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/cs5400.jpg"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS5400 Principles of Programming Languages
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden">
                    Study of programming language design & semantics
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card>
              <Link
                href="/Courses/0123/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/cs5500.jpg"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS5500 Foundations of Software Engineering
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden">
                    Principles and practices of software engineering
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card>
              <Link
                href="/Courses/3456/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/cs5520.jpg"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS5520 Mobile Application Development
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden">
                    Building mobile apps with modern frameworks
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card>
              <Link
                href="/Courses/6789/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/cs5600.jpg"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS5600 Computer Systems
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden">
                    Operating systems and systems programming
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card>
              <Link
                href="/Courses/9012/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/cs6120.jpg"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS6120 Natural Language Processing
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden">
                    Language models and text processing
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card>
              <Link
                href="/Courses/2345/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/cs6140.jpg"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS6140 Machine Learning
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden">
                    Supervised, unsupervised, and deep learning
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card>
              <Link
                href="/Courses/5678/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/cs6200.jpg"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS6200 Information Retrieval
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden">
                    Search engines and retrieval models
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course">
            <Card>
              <Link
                href="/Courses/8901/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/cs6760.jpg"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS6760 Privacy, Security, and Usability
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden">
                    Secure and user-centered system design
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
