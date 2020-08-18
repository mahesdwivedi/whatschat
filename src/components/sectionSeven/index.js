import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding:"80px",
    background: 'linear-gradient(to right top, #966ffc, #6b4dfb)'
    
  },

  head: {
    fontFamily: "HelveticaRoundedLTStd-Bd",
    color: "white",
    fontWeight:"bold",
    fontSize:"33px",
    lineHeight: 1.2 ,

  },
  btn: {
    fontFamily: "HelveticaRoundedLTStd-Bd",
    marginTop:40,
    padding: "10px 25px",
    fontWeight:"bold",
    color: "gray"

  },
  link: {
    fontFamily: "HelveticaRoundedLTStd-Bd",
    color:"white",
    marginTop:40,
    fontWeight:"bold"

  },
}));
const SectionSeven = () => {
  const classes = useStyles();
  return (
    <div className= {classes.root}>
        <Grid container>
            <Grid item sm={3}></Grid>
            <Grid item sm={6} xs={12}>
      <Typography className={classes.head}>
        Submit details to apply for WhatsApp Business API access
      </Typography>
      <Button className={classes.btn} style={{ backgroundColor: "#FFFFFF" }}>Get Started</Button>
      <Typography className={classes.link}>
        Click here to start your 7-day free trial
      </Typography>
      <hr style={{width:"55%", color: "#9174fe", height:"2px"}}></hr>
      </Grid>
      <Grid item sm={3}></Grid>
      </Grid>
    </div>
  );
};

export default SectionSeven;
