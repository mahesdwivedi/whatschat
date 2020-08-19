import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: "20px",
    padding: "50px",
    fontFamily: "HelveticaRoundedLTStd-Bd",
    color: "gray",
  },

  body: {
    fontFamily: "HelveticaRoundedLTStd-Bd",
  },

  name: {
    paddingTop: "30px",
    fontWeight: "bold",
  },

  arrow: {
    margin: "auto",
  },

  arrowBtn: {
    backgroundColor: "White",
    borderRadius: "100px",
    height: "40px",
    width: "40px",
    color: "#b8b8b8",
  },

  role: {
    fontFamily: "HelveticaRoundedLTStd-Bd",
    fontSize: "15px",
  },

  company: {
    fontSize: "10px",
    fontWeight: "bold",
    paddingTop: "15",
    fontFamily: "HelveticaRoundedLTStd-Bd",
  },

  quote: {
    color: "#a999fb",
    height: "100px",
  },
}));

const Carousel = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={1} sm={2} className={classes.arrow}>
        <center>
          <NavigateBeforeIcon className={classes.arrowBtn} />
        </center>
      </Grid>
      <Grid container className={classes.root} xs={10} sm={8}>
        <Grid item xs={1} sm={1}>
          <FormatQuoteIcon classes={classes.quote} />
        </Grid>
        <Grid item xs={10} sm={10}>
          <div>
            <Typography className={classes.body}>
              We’re using Freshchat to solve our customers’ needs with
              precision, and in real-time. It has ensured our customers receive
              prompt personalized experiences and has also brought in
              operational efficiencies that make assisted buying extremely
              scalable.
            </Typography>
            <Typography className={classes.name}>Rama Mishra</Typography>
            <Typography className={classes.role}>Founder</Typography>
            <Typography className={classes.company}>
              FIDELITY ENTERPRISES
            </Typography>
          </div>
        </Grid>
        <Grid item xs={1} sm={1}>
          <FormatQuoteIcon classes={classes.quote} />
        </Grid>
      </Grid>
      <Grid item xs={1} sm={2} className={classes.arrow}>
        <center>
          <NavigateNextIcon className={classes.arrowBtn} />
        </center>
      </Grid>
    </Grid>
  );
};

export default Carousel;
