import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import logo from "../../assets/images/logo.png";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  menuButton: {
    position: "relative",
    right: 0,
  },
  title: {
    color: "#8965FC",
    flexGrow: 0.62,
    fontSize: "29",
    fontFamily: "HelveticaRoundedLTStd-Bd",
    marginTop: "auto",
  },
  tab: {
    paddingRight: "50px",
    textAlign: "left",
    marginTop: "auto",
    fontFamily: "HelveticaRoundedLTStd-Bd",
    color: "gray",
  },
  btn: {
    color: "white",
    padding: "3px 35px",
    textAlign: "left",
    fontFamily: "HelveticaRoundedLTStd-Bd",
    marginTop: "auto",
    borderRadius: 25,
    marginLeft: 15,
  },
  logo: {
    position: "relative",
    top: 17,
  },
  mobTab: {
    textAlign: "left",
    marginTop: "15px",
    fontFamily: "HelveticaRoundedLTStd-Bd",
    color: "gray",
    marginLeft: 25,
    fontSize: 25,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [state, setState] = React.useState({
    left: false,
  });

  const list = (anchor) => (
    <div
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ width: 250 }}
    >
      <Typography className={classes.mobTab}>Why WhatsChat</Typography>
      <Typography className={classes.mobTab}>Pricing</Typography>
      <Typography className={classes.mobTab}>Solutions</Typography>
      <Typography className={classes.mobTab}>About Us</Typography>
      <Typography className={classes.mobTab} style={{ marginBottom: 10 }}>
        Blog
      </Typography>
      <Button
        style={{ backgroundColor: "#8965FC" }}
        color="primary"
        className={classes.btn}
      >
        <Typography variant="body1">Sign Up</Typography>
      </Button>
    </div>
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };

  return (
    <div className={classes.root}>
      <AppBar className="navbar" color="white" position="static">
        <Toolbar>
          {!matches ? (
            <img
              onClick={toggleDrawer("left", true)}
              className={classes.logo}
              height="60px"
              width="60px"
              src={logo}
              alt=""
            ></img>
          ) : (
            <img
              className={classes.logo}
              height="60px"
              width="60px"
              src={logo}
              alt=""
            ></img>
          )}

          <Typography variant="h6" className={classes.title}>
            WhatsChat
          </Typography>
          {matches ? (
            <>
              <Typography className={classes.tab}>Why WhatsChat</Typography>
              <Typography className={classes.tab}>Pricing</Typography>
              <Typography className={classes.tab}>Solutions</Typography>
              <Typography className={classes.tab}>About Us</Typography>
              <Typography className={classes.tab}>Blog</Typography>
              <Button
                style={{ backgroundColor: "#8965FC" }}
                color="primary"
                className={classes.btn}
              >
                <Typography variant="body1">Sign Up</Typography>
              </Button>
            </>
          ) : (
            <React.Fragment key="left">
              <Drawer
                anchor="left"
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
              >
                {list("left")}
              </Drawer>
            </React.Fragment>
          )}
          {/* <React.Fragment key="left">
            <Button onClick={toggleDrawer("left", true)}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Button>
            <Drawer
              anchor="left"
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
          </React.Fragment>

          <Typography variant="h6" className={classes.title}>
            WhatsChat
          </Typography>
          <Typography className={classes.tab}>Why WhatsChat</Typography>
          <Typography className={classes.tab}>Pricing</Typography>
          <Typography className={classes.tab}>Solutions</Typography>
          <Typography className={classes.tab}>About Us</Typography>
          <Typography className={classes.tab}>Blog</Typography>
          <Button
            style={{ backgroundColor: "#8965FC" }}
            color="primary"
            className={classes.btn}
          >
            <Typography variant="body1">Sign Up</Typography>
          </Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
