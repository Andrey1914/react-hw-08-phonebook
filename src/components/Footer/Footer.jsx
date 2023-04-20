import { StyledFooter, Svg, Copyright, GitHubLink } from './FooterStyled';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <StyledFooter component="footer">
      <Copyright>
        © {year} | Developed by
        <GitHubLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Andrey1914"
        >
          <Svg />
        </GitHubLink>
      </Copyright>
    </StyledFooter>
  );
}
