import { Button, Card, Container } from "react-bootstrap";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Main.scss";

export default function Main() {
  return (
    <div className="Main">
      <div className="Main__overlay"></div>
      <Container className="p-5 Main__container">
        <div className="d-flex justify-content-center">
          <Card className="p-5" style={{ maxWidth: 800 }}>
            <h1 className="text-center Main__title">Carlo Alejandro Salas</h1>
            <p className="text-secondary text-center">
              Software engineer | JS Developer
            </p>
            <p className="Main__info">
              I'm Full Stack Developer with 4+ years of experience in Web
              development. I've been working in multiple projects always
              focusing in high quality code and best performance applications
              using the top technologies in the industry.
            </p>
            <section>
              <hr className="text-secondary mb-3" />
              <div className="text-center">
                <Button
                  className="Main__socialMedia"
                  size="lg"
                  href="https://twitter.com/carloalexsalas"
                  target="_blank"
                  variant="dark"
                >
                  <FaTwitter className="align-middle mb-1" />
                </Button>

                <Button
                  className="Main__socialMedia"
                  size="lg"
                  variant="dark"
                  href="https://github.com/carloalejandrosalas"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="align-middle mb-1" />
                </Button>

                <Button
                  className="Main__socialMedia"
                  size="lg"
                  variant="dark"
                  href="https://www.instagram.com/carloalejandrosalas/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="align-middle mb-1" />
                  <i className="w3-hover-text-orange w3-margin fa fa-instagram fa-2x"></i>
                </Button>
                <Button
                  className="Main__socialMedia"
                  size="lg"
                  variant="dark"
                  href="https://www.linkedin.com/in/carlo-alejandro-salas"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="align-middle mb-1" />
                </Button>
              </div>
            </section>
          </Card>
        </div>
      </Container>
    </div>
  );
}
