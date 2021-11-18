import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";

const CardComp = (props) => {
  return (
    <div>
      <Container>
        <Card body color="dark" inverse>
          <CardBody>
            <CardTitle tag="h5">{props.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content
    
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default CardComp;
