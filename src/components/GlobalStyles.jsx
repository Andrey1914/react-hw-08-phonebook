import { css } from "@emotion/react";
// import { GlobalStyles } from '@mui/material';
import "modern-normalize";

export const GlobalStyles = css`
  html[theme-type="light"] {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;

    --bg: #f3f9f9;
    --bg-header: #005bb6;
    --bg-paper: #efefef;
    --overlay-dark: #cee0ff;
    --overlay-light: #f3f8ff;

    --btn-bg: #005bb6;
    --btn-border: #005bb6;

    --text: #312c4d;

    --border: #6e6d6d;
    --accent-border: #59a5f0;
    --warning: #d44444b6;
    --edit: #d4b244;
    --accent: #9fcbf7;

    --loader: #80bfff;
    --loader-secondary: #005bb6;

    --icon: rgba(0, 0, 0, 0.54);
    /* #117394 */
    /*  */
  }

  html[theme-type="dark"] {
    /* --bg-color: #292929; */
    --bg: #312c4d;
    --bg-header: #1c203d;
    --bg-paper: #474262;
    --overlay-dark: #000f50;
    --overlay-light: #88b6ff;

    --btn-bg: #3c90b8;
    --accent-btn-bg: #53699e;
    --btn-border: #7ebaf5;

    --text: #f3f9f9;

    --border: #acadd2;
    --accent-border: #b5cef5;

    --warning: #d44444b6;
    --edit: #d4b244;
    --accent: #1976d2;

    --loader: #3c90b8;
    --loader-secondary: #04145c;

    --icon: rgba(119, 118, 118, 0.85);
    /* #3c90b8 */
    /* #b5cef5 */
    /* #04145c */
    /* #53699e */
    /* #acadd2 */
    /* #312c4d */
    /* #1976d2 */
  }

  @font-face {
    font-family: "Montserrat";
    src: url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap"),
      format("truetype");
  }

  body {
    margin: 0;
    line-height: 1.5;
    font-family: "Montserrat", sans-serif;

    background-image: url("../components/images/bg-img3.jpg");
    background-size: cover;
  }
  code {
    font-family: "source-code-pro", "Menlo", "Monaco", "Consolas", "Courier New",
      monospace;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  label,
  ul,
  p,
  a {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  main {
    /* height: 100vh; */
    background: linear-gradient(
      45deg,
      var(--overlay-light),
      var(--overlay-dark)
    );
  }
`;
