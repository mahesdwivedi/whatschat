import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import secFour from "../../assets/images/secFour.png";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    flexGrow: 1,
    backgroundColor: "#f9f9f9",
  },
  head: {
    marginTop: 65,
    fontSize: "35px",
    fontFamily: "HelveticaRoundedLTStd-Bd",
    fontWeight: "bold",
    color: "gray",
    textAlign: "left",
  },

  subHead: {
    marginTop: 30,
    fontSize: "17px",
    fontFamily: "HelveticaRoundedLTStd-Bd",
    color: "gray",
    textAlign: "left",
  },
  learnMore:{
    fontSize:"18px",
    marginTop:"20px",
    color:"#8965fc",
    fontFamily: "HelveticaRoundedLTStd-Bd",
  }
}));

export default function SectionFour() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid justify="center" container spacing={6}>
          <Grid item xs={12} sm={5}>
            <img height="100%" width="100%" src={secFour} alt=""></img>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography className={classes.head}>
              Get personalized notifications at scale
            </Typography>
            <Typography className={classes.subHead}>
              Easily manage your subscribers, apply filters and send
              personalized templates to a selected group of audience.
            </Typography>
            <Typography className={classes.learnMore}>Learn more...</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
