import { Form, InputGroup, Button } from "react-bootstrap";
import { randomRange, range } from "@/lib/math";
import { useState, FormEvent } from "react";


type NumberFormState = {
  length: number;
  min?: number;
  max?: number;
  start?: number;
  step?: number;
};

export default function NumberForm({ isRandom }: { isRandom: boolean }) {
  const [formState, setFormState] = useState<NumberFormState>({
    length: 10,
    min: 0,
    max: 100,
    start: 0,
    step: 1,
  });

  const [result, setResult] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isRandom) {
      const { length, min, max } = formState;
      setResult(JSON.stringify(randomRange(length, min || 0, max || 100)));
    } else {
      const { length, start, step } = formState;
      setResult(JSON.stringify(range(length, start || 0, step || 1)));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text>Length</InputGroup.Text>
        <Form.Control
          name="length"
          type="number"
          value={formState.length}
          onChange={handleInputChange}
          aria-label="Size of list to generate"
        />
      </InputGroup>

      {isRandom ? (
        <>
          <InputGroup className="mb-3">
            <InputGroup.Text>Min</InputGroup.Text>
            <Form.Control
              name="min"
              type="number"
              value={formState.min}
              onChange={handleInputChange}
              aria-label="Minimum value of range (inclusive)"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Max</InputGroup.Text>
            <Form.Control
              name="max"
              type="number"
              value={formState.max}
              onChange={handleInputChange}
              aria-label="Maximum value of range (inclusive)"
            />
          </InputGroup>
        </>
      ) : (
        <>
          <InputGroup className="mb-3">
            <InputGroup.Text>Start</InputGroup.Text>
            <Form.Control
              name="start"
              type="number"
              value={formState.start}
              onChange={handleInputChange}
              aria-label="Starting value of range"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Step</InputGroup.Text>
            <Form.Control
              name="step"
              type="number"
              value={formState.step}
              onChange={handleInputChange}
              aria-label="Number of steps between each item"
            />
          </InputGroup>
        </>
      )}

      <Button className="mb-3" type="submit">
        Generate List
      </Button>

      <InputGroup>
        <Form.Control
          as="textarea"
          placeholder="Generated list will appear here..."
          value={result}
          readOnly
        />
      </InputGroup>
    </Form>
  );
}
