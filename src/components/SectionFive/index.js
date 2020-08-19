import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import secFive from "../../assets/images/secFive.PNG";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    flexGrow: 1,
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

export default function SectionFive() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Grid justify="center" container spacing={6}>
          <Grid item xs={12} sm={5}>
            <Typography className={classes.head}>
              Automation of WhatsApp Replies
            </Typography>
            <Typography className={classes.subHead}>
              Trigger automated responses to users based on keyword matching
              rules.
            </Typography>
            <Typography className={classes.learnMore}>Learn more...</Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <img height="100%" width="100%" src={secFive} alt=""></img>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
