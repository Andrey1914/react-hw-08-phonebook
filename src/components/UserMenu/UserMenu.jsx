import * as React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authOperations";

import { Box, Avatar, Drawer, Divider, IconButton } from "@mui/material";

import {
  Title,
  UserMenuText,
  LogoutButton,
  LogOutIcon,
  UserMenuBox,
} from "./UserMenuStyled";

import { Menu } from "@mui/icons-material";

import Footer from "../Footer/Footer";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const drawerWidth = 260;

export default function UserMenu(props) {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "var(--bg)",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={2}
        mx={1}
      >
        <ThemeSwitch />
        <Title variant="h6" sx={{ color: "var(--text)" }}>
          Phonebook
        </Title>
        <LogoutButton
          // variant="contained"
          type="button"
          onClick={() => dispatch(logOut())}
        >
          <LogOutIcon size={24} />
        </LogoutButton>
      </Box>
      <Divider sx={{ borderColor: "var(--border-color)" }} />
      <Box p={2}>
        <Avatar
          {...stringAvatar(userName)}
          sx={{
            bgcolor: "var(--bg-paper)",
            color: "var(--text)",
            fontFamily: "Montserrat",
            m: "0 auto",
          }}
        />
      </Box>
      <UserMenuText variant="p">Welcome, {userName}!</UserMenuText>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  function stringAvatar(name) {
    return name.includes(" ")
      ? {
          children: `${name?.split(" ")[0][0]}${
            name ? name?.split(" ")[1][0] : ""
          }`,
        }
      : { children: `${name[0][0]}` };
  }

  return (
    <UserMenuBox>
      <Title
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          display: { xs: "none", sm: "block" },
        }}
      >
        Phonebook
      </Title>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <ThemeSwitch />
      </Box>
      <Avatar
        {...stringAvatar(userName)}
        sx={{
          background: "radial-gradient(var(--bg-header), var(--text))",
          color: "var(--text)",
          fontFamily: "Montserrat",
          fontSize: "1.3rem",
          fontWeight: "700",
        }}
      />
      <UserMenuText>Welcome, {userName}!</UserMenuText>
      <LogoutButton
        // variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <LogOutIcon size={24} />
      </LogoutButton>

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { sm: "none" }, ml: "auto" }}
      >
        <Menu />
      </IconButton>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            justifyContent: "space-between",
            backgroundColor: "var(--bg)",
          },
        }}
      >
        {drawer}
        <Footer />
      </Drawer>
    </UserMenuBox>
  );
}

UserMenu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
