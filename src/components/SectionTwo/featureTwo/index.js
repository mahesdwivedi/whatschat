import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";

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
    lineHeight: 1.2,
  },
  body: {
    fontSize: "17px",
    fontFamily: "HelveticaRoundedLTStd-Bd",
    color: "gray",
    marginTop: "25px",
  },
}));

function FeatureTwo() {
  const classes = useStyles();
  return (
    <div align="center">
      <LinkIcon className={classes.icon} />
      <Typography className={classes.head}>
        Create a WhatsApp Business Account.
      </Typography>
      <Typography className={classes.body}>
        We can create it with you own mobile number and your business profile.
      </Typography>
    </div>
  );
}

export default FeatureTwo;
