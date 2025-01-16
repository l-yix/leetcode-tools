"use client";
import { useState } from "react";
import { Card, Nav } from "react-bootstrap";
import PageLayout from "@/components/PageLayout";
import NumberForm from "@/components/NumberForm";

export default function NumberPage() {
  const [key, setKey] = useState<string>("random");

  return (
    <PageLayout>
      <Card>
        <Card.Header>
          <Nav
            variant="tabs"
            activeKey={key}
            onSelect={(k) => setKey(k || "random")}
          >
            <Nav.Item>
              <Nav.Link eventKey="random">Random</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sorted">Sorted</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
        <Card.Title> {key === 'random'? 'Random List Generator': 'Sorted List Generator'}</Card.Title>
          <Card.Body>
            {key === "random" ? (
              <NumberForm isRandom={true} />
            ) : (
              <NumberForm isRandom={false} />
            )}
          </Card.Body>
        </Card.Body>
      </Card>
    </PageLayout>
  );
}
