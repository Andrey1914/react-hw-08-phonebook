import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`;
