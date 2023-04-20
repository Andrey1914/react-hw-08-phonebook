import { useDispatch, useSelector } from "react-redux";

import { Container, Box, Button, Alert, Stack } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

import Section from "../components/Section/Section";
import { Input } from "../components/Input/InputStyled";

import useFormFields from "../hooks/useFormFields";

import { logIn } from "../redux/auth/authOperations";
import { getError } from "../redux/auth/authSelectors";
import { resetError } from "../redux/auth/authActions";

export default function LoginPage() {
  const dispatch = useDispatch();
  const {
    state: userEmail,
    setState: setUserEmail,
    handleChange: handleUserEmailChange,
  } = useFormFields("");
  const {
    state: userPassword,
    setState: setUserPassword,
    handleChange: handleUserPasswordChange,
  } = useFormFields("");
  const error = useSelector(getError);

  const handleLogInSubmit = (evt) => {
    evt.preventDefault();

    dispatch(logIn({ email: userEmail, password: userPassword }));
    formReset();
  };

  const formReset = () => {
    setUserEmail("");
    setUserPassword("");
  };

  return (
    <Section title="Please, login to your account." isHidden={false}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "87.6vh",
        }}
      >
        <Box
          component="form"
          onSubmit={handleLogInSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Input
            // id="outlined-basic"
            label="Email:"
            variant="outlined"
            type="email"
            autoFocus={true}
            required
            value={userEmail}
            onChange={handleUserEmailChange}
          />
          <Input
            // id="outlined-basic"
            label="Password:"
            variant="outlined"
            type="password"
            required
            value={userPassword}
            onChange={handleUserPasswordChange}
          />
          <Button
            variant="contained"
            sx={{
              fontFamily: "Montserrat",
              color: "var(--text)",
              backgroundColor: "var(--btn-bg)",
              fontWeight: "700",
            }}
            type="submit"
            disableElevation={
              !userEmail || userPassword.length < 7 ? true : false
            }
            endIcon={<SendIcon />}
          >
            Log in
          </Button>
        </Box>
      </Container>
      {error && (
        <Stack
          sx={{
            width: "400px",
            margin: "10px auto",
            boxShadow: 8,
            backgroundColor: "#fff",
          }}
          spacing={2}
        >
          <Alert
            severity="error"
            variant="outlined"
            onClose={setTimeout(() => {
              dispatch(resetError());
            }, 2000)}
            action={
              <Button
                color="inherit"
                size="small"
                onClick={() => {
                  dispatch(resetError());
                }}
              >
                Close
              </Button>
            }
          >
            {error}
          </Alert>
        </Stack>
      )}
    </Section>
  );
}
