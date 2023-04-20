import { Typography, Box, styled } from '@mui/material';

export const StyledSection = styled(Box)`
  padding: 80px 0 10px;
  background: transparent;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 120px 0 20px;
  }
`;

export const SectionTitle = styled(Typography)`
  font-family: 'Montserrat';
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--text);
  text-align: center;
  padding: 0 0 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
    padding: 0 0 2rem;
  }
`;
