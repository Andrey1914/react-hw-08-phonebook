import {
  Box,
  Paper,
  IconButton,
  Typography,
  ListItemButton,
  styled,
} from "@mui/material";

export const Item = styled(Paper)`
  display: flex;
  /* justify-content: space-between; */
  padding: 0.6rem;
  background: transparent;
  font-family: "Montserrat";
  color: var(--text);

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.8rem;
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const ContactInfo = styled(Typography)`
  font-family: "Montserrat";
  font-size: 0.85rem;
`;

export const ListBtn = styled(ListItemButton)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 0.7rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.5rem;
  }
`;

export const IconBtn = styled(IconButton)({
  padding: "1",
  color: "var(--text)",
  tabSize: "medium",
});
