import React from "react";
import { Container } from "@mui/material";

export default function ContainerMui({ children }) {
  return <Container maxWidth="xs">{children}</Container>;
}
