import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
// if you wanto to add twitter
// import TwitterIcon from '@material-ui/icons/Twitter';

import { socialMedia } from "../data/socialMedia";

const StyledIcon = styled("div")(
  ({ theme }) => `
  width: "30px";
  height: "30px";
  [${theme.breakpoints.down("xs")}]: {
    width: "25px",
    height: "25px",
  }
  "&:hover": {
    color: ${theme.palette.info.main},
  }
`
);

const Social = ({ color }) => {
  // if you want to add more social medias, add it to here and /data/socialMedia.js.
  // and import the Material Icon, then add the code.
  const { instagram, facebook, github, homepage } = socialMedia;

  // if you add twitter , it will be
  // const { instagram, facebook, github, homepage, twitter } = socialMedia;
  {
    //  and add this code to line 98,
    /* <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={twitter}
      >
       <TwitterIcon className={classes.snsIcon} />
    </Grid> */
  }
  return (
    <Grid item container spacing={2} justifyContent="center">
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={homepage}
      >
        <HomeIcon>
          color={color ? "primary" : "secondary"}
          <StyledIcon />
        </HomeIcon>
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={facebook}
      >
        <FacebookIcon>
          color={color ? "primary" : "secondary"}
          <StyledIcon />
        </FacebookIcon>
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={instagram}
      >
        <InstagramIcon>
          color={color ? "primary" : "secondary"}
          <StyledIcon />
        </InstagramIcon>
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={github}
      >
        <GitHubIcon>
          color={color ? "primary" : "secondary"}
          <StyledIcon />
        </GitHubIcon>
      </Grid>
      {/* add social media*/}
    </Grid>
  );
};

export default Social;
