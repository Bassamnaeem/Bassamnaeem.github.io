import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import SocialLinks from "../components/SocialLinks";

const GithubProfileCard = ({ prof }) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container>
        <div className="p-4">
          <Row>
            <Col lg="4" className="order-lg-2">
              <img
                src={prof.avatar_url}
                alt=""
                className="rounded-circle img-fluid shadow mb-4"
                style={{ width: "200px" }}
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Let&apos;s Connect!</h2>
              <p className="lead text-white mt-3">
                Whether it&apos;s a project discussion or just saying hello,
                feel free to reach out.
              </p>
              <p className="text-white mt-3">{prof.bio}</p>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                <i className="ni ni-pin-3 text-info mr-2" />
                {prof.location}
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
