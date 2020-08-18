import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

const useStyles = makeStyles((theme) => ({
  icon: {
    height: "52px",
    width: "52px",
    color: "#8965fc",
  },
  head: {
    fontSize: "20px",
    fontFamily: "HelveticaRoundedLTStd-Bd",
    fontWeight: "bold",
    color: "gray",
    marginTop: "25px",
    lineHeight:1.2,

  },
  body: {
    fontSize: "17px",
    fontFamily: "HelveticaRoundedLTStd-Bd",
    color: "gray",
    marginTop: "25px"

  },
}));

function FeatureOne() {
  const classes = useStyles();

  return (
    <div align="center">
      <QuestionAnswerIcon className={classes.icon} />
      <Typography className={classes.head}>
      Engage with Customers on WhatsApp.
      </Typography>
      <Typography className={classes.body}>
      WhatsApp Business API is in beta preview.
       You can request the access here.
      </Typography>
    </div>
  );
}

export default FeatureOne;
