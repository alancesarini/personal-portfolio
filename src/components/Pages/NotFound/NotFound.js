import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Explore from "@material-ui/icons/Explore";
import Page from "../../hoc/Page";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <Page>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.NotFound}
      >
        <div className={classes.Content}>
          <Explore color="primary" className={classes.Icon} />

          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            paragraph
            className={classes.Text}
          >
            Are you lost? <Link href="/">Go to the homepage</Link>
          </Typography>
        </div>
      </Grid>
    </Page>
  );
};

export default NotFound;
