import { BsLinkedin } from 'react-icons/bs';
import { Box, Link, styled } from '@mui/material';

export const StyledFooter = styled(Box)`
  width: 100%;
  display: flex;
  padding: 16px 0;
  background-color: var(--bg-header);
`;

export const Copyright = styled(Box)`
  display: flex;
  align-items: center;
  margin: 0 auto;
  color: var(--text);
  font-family: 'Montserrat';
  font-size: 0.8rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

export const GitHubLink = styled(Link)`
  display: flex;
`;

export const Svg = styled(BsLinkedin)`
  margin-left: 8px;
  color: var(--text);
  width: 18px;
  height: 18px;
  transform: scale(1);
  transition: all 250ms;
  :hover,
  :focus {
    opacity: 0.8;
    transform: scale(0.92);
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 20px;
    height: 20px;
  }
`;
