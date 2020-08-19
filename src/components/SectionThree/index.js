import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import secThree from "../../assets/images/secThree.PNG";
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

export default function SectionThree() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Grid justify="center" container spacing={6}>
          <Grid item xs={12} sm={5}>
            <Typography className={classes.head}>
              All-in-one inbox for WhatsApp
            </Typography>
            <Typography className={classes.subHead}>
              Enable every team member to view, assign and respond to every
              client, even with multiple WhatsApp numbers!
            </Typography>
            <Typography className={classes.learnMore}>Learn more...</Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <img height="100%" width="100%" src={secThree} alt=""></img>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
