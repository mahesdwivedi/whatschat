import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import logo from "../../assets/images/logo.png";
import Facebook from "../../assets/images/Facebook.png";
import LinkedIn from "../../assets/images/Linkedin.png";
import PlayStore from "../../assets/images/PlayStore.png";
import AppStore from "../../assets/images/AppStore.png";
import Twitter from "../../assets/images/Twitter.png";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "75px",
    marginTop: "40px",
  },
  brand: {
    color: "#808080",
    fontSize: "42",
    fontFamily: "HelveticaRoundedLTStd-Bd",
    marginTop: "18px",
    marginBottom: "40px",
  },
  desc: {
    fontFamily: "HelveticaRoundedLTStd-Bd",
    color: "#808080",
    lineHeight: 1.1,
  },
  footerTab: {
    fontFamily: "HelveticaRoundedLTStd-Bd",
    color: "#808080",
    marginBottom: "20px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid
          justify="space-evenly"
          alignItems="center"
          container
          spacing={2}
          className={classes.root}
        >
          <Grid item sm={4}>
            <Box display="flex" flexDirection="row">
              <img height="60px" width="60px" src={logo} alt=""></img>
              <Typography variant="h6" className={classes.brand}>
                WhatsChat
              </Typography>
            </Box>
            <Typography variant="h6" className={classes.desc}>
              Ultimate WhatsApp Web CRM Solution for your Business. Collaborate
              on customer engagements through WhatsApp.
            </Typography>
          </Grid>

          <Grid item>
            <div>
              <Typography className={classes.footerTab}>About Us</Typography>
              <Typography className={classes.footerTab}>Sign Up</Typography>
              <Typography className={classes.footerTab}>User Login</Typography>
              <Typography className={classes.footerTab}>
                Integrations
              </Typography>
              <Typography className={classes.footerTab}>Roadmap</Typography>
            </div>
          </Grid>

          <Grid item>
            <Typography className={classes.footerTab}>Our Blog</Typography>
            <Typography className={classes.footerTab}>
              FAQs and Guides
            </Typography>
            <Typography className={classes.footerTab}>
              Recent Updates
            </Typography>
            <Typography className={classes.footerTab}>
              Affliate Program
            </Typography>
            <Typography className={classes.footerTab}>Developers</Typography>
          </Grid>
          <Grid sm={2} item>
            <img
              style={{ marginBottom: "1rem", paddingRight: "10px" }}
              src={AppStore}
              height="50px"
              width="150px"
              alt=""
            ></img>
            <img
              style={{ marginBottom: "1rem" }}
              src={PlayStore}
              height="45px"
              width="150px"
              alt=""
            ></img>
            <Grid container justify="space-between" direction="row">
              <img src={Facebook} alt=""></img>
              <img src={Twitter} alt=""></img>
              <img src={LinkedIn} alt=""></img>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
