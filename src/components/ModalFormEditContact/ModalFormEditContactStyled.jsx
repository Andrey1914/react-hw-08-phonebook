import { IconButton, Box, Typography, styled } from '@mui/material';

export const Overlay = styled(Box)`
  padding: 0 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, var(--overlay-light), var(--overlay-dark));

  z-index: 2000;
`;

export const Modal = styled(Box)`
  padding: 40px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;

  background-color: var(--bg);

  border-color: var(--border);
  border-radius: 4px;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 30px 60px 60px;
  }
`;

export const Title = styled(Typography)`
  margin-bottom: 20px;
  font-family: 'Montserrat';
  font-weight: 700;
  text-align: center;
  font-size: 1.2rem;
  color: var(--text);

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: -20px;
  right: -20px;
  color: var(--icon);
  border: 2px solid var(--icon);
  background: var(--bg);
`;
