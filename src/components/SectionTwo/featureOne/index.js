import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";

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
      <AssignmentIcon className={classes.icon} />
      <Typography className={classes.head}>
        We make sure you're in good hands.
      </Typography>
      <Typography className={classes.body}>
        Apply for a Business Account, link it up with official WhatsApp Business
        API.
      </Typography>
    </div>
  );
}

export default FeatureOne;
