import React, { useEffect, useState } from "react";
import { Alert, Box, Container, Heading } from "styled-minimal";
import Cards from "../Cards";
import data from "../../mocks/data.json";

export default function Panel() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const values = Object.values(data?.durations);
    const max = Math.max(...values);
    setInterval(() => {
      setShowMessage(true);
    }, max);
  }, []);

  const cardData = data?.steps?.map(({key, value}) => {
    return {
      color: value,
      step: key,
      duration: data?.durations[key]
    }
  })

  return (
    <Container>
      <Heading mb={3} textAlign="center">
        Cards and timer
      </Heading>
      {cardData.map(({ color, duration }) => (
        <Cards color={color} duration={duration} />
      ))}
      {showMessage && (
        <Box display="flex" justifyContent="center" width="100%">
          <Alert textAlign="center" variant="light">
            {cardData.map(({ duration, color }) => (
              <>
                <strong>{color}</strong>: {duration}ms{" "}
              </>
            ))}
          </Alert>
        </Box>
      )}
    </Container>
  );
}
