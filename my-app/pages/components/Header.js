import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect } from "react";
import Link from "./Link";
import { styled } from "@mui/material/styles";
import { routes } from "../data/routes";

const StyledAppBar = styled(AppBar)(
  ({ theme }) => `
  background-color: ${theme.palette.primary.main};
  padding-right: 79px;
  padding-left: 118px;
`
);

const StyledLogo = styled(Typography)(
  ({ theme }) => `
  font-family: Work Sans, sans-serif;
  font-weight: 600;
  color: #FFFEFE;
  textAlign: left;
`
);

const StyledToolbar = styled(Toolbar)(
  ({ theme }) => `
  display: flex;
  justify-content: space-between;
`
);

const StyledMenuButton = styled(Button)(
  ({ theme }) => `
  font-family: Open Sans, sans-serif;
  font-weight: 700;
  size: 18px;
  margin-left: 38px;
`
);

const StyledDrawerContainer = styled("div")(
  ({ theme }) => `
  padding: 20px 30px;
`
);

export default function Header() {
  const path = routes;
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <StyledToolbar>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
      </StyledToolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <StyledDrawerContainer>{getDrawerChoices()}</StyledDrawerContainer>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return path.map(({ name, link }) => {
      return (
        <Link href={link}>
          <MenuItem>{name}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <StyledLogo variant="h6" component="h1">
      Cameron Streeter
    </StyledLogo>
  );

  const getMenuButtons = () => {
    return path.map(({ name, link }) => {
      return (
        <StyledMenuButton
          {...{
            key: name,
            color: "inherit",
            to: link,
          }}
        >
          {name}
        </StyledMenuButton>
      );
    });
  };

  return (
    <StyledAppBar
      sx={{
        "@media (max-width: 900px)": {
          paddingLeft: 0,
        },
      }}
    >
      {mobileView ? displayMobile() : displayDesktop()}
    </StyledAppBar>
  );
}
