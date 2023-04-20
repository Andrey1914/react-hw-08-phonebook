import * as React from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/authSelectors";
import { refreshCurrentUser } from "../../redux/auth/authOperations";

import UserMenu from "../UserMenu/UserMenu";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import Footer from "../Footer/Footer";

import {
  Box,
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import {
  NavigationList,
  NavigationLink,
  DrowerItem,
  Title,
} from "./HeaderStyled";

const drawerWidth = 240;

export default function Header(props) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const { data } = refreshCurrentUser();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "var(--bg)" }}
    >
      <Title variant="h6" sx={{ my: 2, color: "var(--text)" }}>
        Phonebook
      </Title>
      <Divider sx={{ borderColor: "var(--border-color)" }} />
      <NavigationList>
        <NavigationLink to="/authorization">
          <DrowerItem>Login</DrowerItem>
        </NavigationLink>
        <NavigationLink to="/registration">
          <DrowerItem>Registration</DrowerItem>
        </NavigationLink>
      </NavigationList>
      <ThemeSwitch />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="header">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{ padding: "0.7rem 0", backgroundColor: "var(--bg-header)" }}
        >
          {!isLoggedIn ? (
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" }, color: "var(--text)" }}
              >
                <MenuIcon />
              </IconButton>
              <Title variant="h6">Phonebook</Title>

              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <ThemeSwitch />
                <NavigationList>
                  <li>
                    <NavigationLink to="/authorization" exact="true">
                      Login
                    </NavigationLink>
                  </li>
                  <li>
                    <NavigationLink to="/registration" exact="true">
                      Registration
                    </NavigationLink>
                  </li>
                </NavigationList>
              </Box>
            </Toolbar>
          ) : (
            <UserMenu data={data} />
          )}
        </AppBar>
        <Box component="nav">
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
        </Box>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
