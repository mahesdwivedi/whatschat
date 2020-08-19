import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import ill from "../../assets/images/ill.png";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    flexGrow: 1,
    paddingBottom: 150,
  },
  head: {
    marginTop: 65,
    fontSize: "44px",
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
    paddingBottom: 30,
  },

  textInput: {
    borderColor: "#b59efd !important",
    // height: "45px",
    // marginTop: 10,
  },

  textbox: {
    width: "251px",
  },
  btn: {
    color: "white",
    padding: "16px 37px",
    textAlign: "left",
    fontFamily: "HelveticaRoundedLTStd-Bd",
    marginLeft: -10,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography className={classes.head}>
              ‘Wow’ your customers at their fingertips
            </Typography>
            <Typography className={classes.subHead}>
              Ultimate WhatsApp Web CRM Solution for your Business. Collaborate
              on customer engagements through WhatsApp.
            </Typography>

            <TextField
              InputProps={{
                classes: {
                  notchedOutline: classes.textInput,
                },
                inputMode: "numeric",
              }}
              className={classes.textbox}
              id="outlined-basic"
              label="Your E-mail"
              variant="outlined"
            />
            <Button
              style={{ backgroundColor: "#8965FC" }}
              color="primary"
              className={classes.btn}
            >
              <Typography variant="body1">Sign Up</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img height="100%" width="100%" src={ill} alt=""></img>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
