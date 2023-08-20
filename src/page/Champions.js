import Card from "../component/Card";
import { Col, Container, Row } from "react-bootstrap";

const Champions = ({championdata}) => {
   
  return (
    <div className="main">
      <Container>
        <Row>
          {championdata.map((item) => (
            <Col lg={2} md={4} sm={6}>
              <Card item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Champions;
