import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import FeatureOne from "./featureOne";
import FeatureTwo from "./featureTwo";
import FeatureThree from "./featureThree";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f9f9f9",
  },
  head: {
    fontFamily: "HelveticaRoundedLTStd-Bd",
    fontWeight: "bold",
    color: "#808080",
    fontSize: "35px",
    lineHeight: 1.2,
    marginTop: "65px",
  },
  subHead: {
    fontFamily: "HelveticaRoundedLTStd-Bd",
    marginTop: "20px",
    color: "#8965fb",
    fontSize: "18px",
    marginBottom: "15px",
  },
  body: {
    paddingBottom: "60px",
  },
}));

export default function SectionTwo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container align="center">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Grid item sm={3}></Grid>
            <Grid item xs={12} sm={6}>
              <Typography className={classes.head}>
                Make the best out of the most popular messaging app for your
                business.
              </Typography>
              <Typography className={classes.subHead}>
                Do more than just chat!
              </Typography>
            </Grid>
            <Grid item sm={3}></Grid>
          </Grid>
          <Grid justify="center" className={classes.body} container spacing={3}>
            <Grid item xs={12} sm={3}>
              <FeatureOne />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FeatureTwo />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FeatureThree />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
