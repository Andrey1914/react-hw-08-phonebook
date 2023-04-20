import { TextField, styled } from '@mui/material';

export const Input = styled(TextField)({
  '& label': {
    color: 'var(--border)',
    fontFamily: 'Montserrat',
  },
  '& label.Mui-focused': {
    color: 'var(--accent-border)',
  },
  '& input': {
    color: 'var(--text)',
    fontFamily: 'Montserrat',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'var(--border)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--accent-border)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--accent-border)',
    },
  },
});
