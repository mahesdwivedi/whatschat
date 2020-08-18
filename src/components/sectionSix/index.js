import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import CompanyImage from "../../assets/images/CompanyImage.png";
import Container from "@material-ui/core/Container";
import Carousel from "./carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    flexGrow: 1,
    backgroundColor:"#f9f9f9",
    paddingBottom:80

    
  },
  head: {
    marginTop: 65,
    fontSize: "44px",
    fontFamily: "HelveticaRoundedLTStd-Bd",
    fontWeight: "bold",
    color: "gray",
    textAlign: "center",
    
  },



  textInput: {
    borderColor: "#b59efd !important",
    height: "45px",
    marginTop: 10,
  },

  textbox: {
    width: "251px",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
          <Container>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <Typography className={classes.head}>Big Brands Love Us</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <img height="100%" width="100%" src={CompanyImage}></img>
          </Grid>
        </Grid>
        <Grid container>
          <Carousel />
        </Grid>
        </Container>
      </div>
    
  );
}
