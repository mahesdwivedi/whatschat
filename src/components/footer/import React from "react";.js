import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Logo from "../../assets/images/logo.png";
import Facebook from "../../assets/images/Facebook.png";
import LinkedIn from "../../assets/images/Linkedin.png";
import PlayStore from "../../assets/images/PlayStore.png";
import AppStore from "../../assets/images/AppStore.png";
import Twitter from "../../assets/images/Twitter.png";

const useStyles = makeStyles((theme) => ({
  brand: {
    color: "#8965FC",
    fontSize: "29",
    fontFamily: "HelveticaRoundedLTStd-Bd",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <Logo />
          <Typography className={classes.brand}>WhatsChat</Typography>
          <Typography>
            Ultimate WhatsApp Web CRM Solution for your Business. Collaborate on
            customer engagements through WhatsApp.
          </Typography>
        </Grid>
        <Grid item>
          <Typography>About Us</Typography>
          <Typography>Sign Up</Typography>
          <Typography>User Login</Typography>
          <Typography>Integrations</Typography>
          <Typography>Roadmap</Typography>
        </Grid>
        <Grid item>
          <Typography>Our Blog</Typography>
          <Typography>FAQs and Guides</Typography>
          <Typography>Recent Updates</Typography>
          <Typography>Affliate Program</Typography>
          <Typography>Developers</Typography>
        </Grid>
        <Grid item>
          <AppStore />
          <PlayStore />
          <Facebook />
          <Twitter />
          <LinkedIn />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
