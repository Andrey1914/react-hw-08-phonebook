import { useDispatch, useSelector } from "react-redux";

import { Box, Container, Alert, Stack, Button } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

import useFormFields from "../hooks/useFormFields";

import Section from "../components/Section/Section";

import { register } from "../redux/auth/authOperations";
import { getError } from "../redux/auth/authSelectors";
import { resetError } from "../redux/auth/authActions";

import { Input } from "../components/Input/InputStyled";

export default function RegistrationPage() {
  const dispatch = useDispatch();

  const {
    state: userName,
    setState: setUserName,
    handleChange: handleUserNameChange,
  } = useFormFields("");

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

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    dispatch(
      register({ name: userName, email: userEmail, password: userPassword })
    );
    formReset();
  };

  const formReset = () => {
    setUserName("");
    setUserEmail("");
    setUserPassword("");
  };

  return (
    <Section
      title="Please, register or login to your account."
      isHidden={false}
    >
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
          onSubmit={handleRegisterSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Input
            // id="outlined-basic"
            label="Name:"
            variant="outlined"
            type="text"
            required
            autoFocus={true}
            value={userName}
            onChange={handleUserNameChange}
          />
          <Input
            // id="outlined-basic"
            label="Email:"
            variant="outlined"
            type="email"
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
              !userName || !userEmail || userPassword.length < 7 ? true : false
            }
            endIcon={<SendIcon />}
          >
            Registration
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
