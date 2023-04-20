import { Typography, Button, Box, styled } from '@mui/material';
import { Logout } from '@mui/icons-material';

export const UserMenuBox = styled(Box)`
  display: flex;
  width: calc(100% - 1rem);
  margin: 0 auto;
  align-items: center;
  gap: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: calc(100% - 3rem);
  }
`;

export const Title = styled(Typography)`
  font-family: 'Montserrat';
  font-weight: 700;
  color: var(--text);
  font-size: 1rem;
`;

export const UserMenuText = styled(Typography)`
  font-family: 'Montserrat';
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text);

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

export const LogOutIcon = styled(Logout)`
  color: var(--text);
`;

export const LogoutButton = styled(Button)({
  padding: '8px',
});
