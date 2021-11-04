import Link from "./Link";
import { useRouter } from "next/router";

import { styled } from "@mui/material/styles";

import { Container, Grid, Typography } from "@mui/material";

import { routes } from "../data/routes";
import Social from "./Social";

const StyledFooter = styled("footer")(
  ({ theme }) => `
  background-color: ${theme.palette.primary.main};
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 6em;
  padding: 2em 0;
`
);

const StyledLink = styled(Typography)(
  ({ theme }) => `
  font-size: 1.25em;
  color: #fff;
  &:hover {
    color: ${theme.palette.info.main};
  }
`
);

const StyledCopyright = styled(Typography)(
  ({ theme }) => `
  color: #fff;
  font-size: 1em;
  &:hover {
    color: ${theme.palette.info.main};
  }
`
);

const Footer = () => {
  const path = routes;
  const router = useRouter();
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {path.map(({ name, link }) => (
            <Grid item key={link}>
              <Link href={link}>
                <StyledLink
                  sx={{
                    fontWeight: router.pathname === link && "bold",
                    borderBottom:
                      router.pathname === link && "1px solid #757ce8",
                  }}
                >
                  {name}
                </StyledLink>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid container direction="column" sx={{ margin: "1.2em 0" }}>
          <Social />
        </Grid>
        <Grid
          item
          container
          component={"a"}
          target="_blank"
          rel="noreferrer noopener"
          href="https://satoruakiyama.com"
          justifyContent="center"
          sx={{
            textDecoration: "none",
          }}
        >
          <StyledCopyright>&copy; Cameron Streeter</StyledCopyright>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
