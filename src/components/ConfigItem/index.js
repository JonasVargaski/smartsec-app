import React from 'react';

import { Container, Pointer, Label, Value } from './styles';

export default function ConfigItem({ label, value }) {
  return (
    <Container>
      <Pointer />
      <Label>{label}: </Label>
      <Value>{value}</Value>
    </Container>
  );
}
