import React, { useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import pizzas from "./data";

import { PizzaCard } from "./components/PizzaCard";
import { Confirmation } from "./components/Confirmation";

export default function App() {
  const [ordered, setOrdered] = useState(false);

  function displayConfirmation() {
    setOrdered(true);

    setTimeout(() => {
      setOrdered(false);
    }, 3000);
  }

  return (
    <Container>
      {ordered && <Confirmation toggle={setOrdered} />}
      <Row>
        {pizzas.map(data => (
          <Col xs={3} className="mb-5" key={`${data.id}`}>
            <PizzaCard data={data} setOrdered={displayConfirmation} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
