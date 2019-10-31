import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import classes from "./PageTitle.module.css";

const PageTitle = props => {
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <div className={classes.Container}>
          <Typography variant="h1" component="h1" className={classes.Title}>
            {props.title}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default PageTitle;
