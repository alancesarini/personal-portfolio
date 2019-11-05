import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import classes from "./Bio.module.css";
import data from "../../../data/bio";
import Grid from "@material-ui/core/Grid";
import Page from "../../hoc/Page";
import PageTitle from "../../UI/PageTitle/PageTitle";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import { colors } from "../../../constants/colors";

const Bio = props => {
  return (
    <Page>
      <PageTitle title="Bio" />
      <Grid container justify="center">
        <Grid item lg={6} xs={12}>
          <Card className={classes.Bio}>
            <CardContent>
              <Grid container justify="center">
                <Grid item lg={2} xs={12}>
                  <div className={classes.AvatarContainer}>
                    <Avatar
                      alt="Alan Cesarini"
                      src={data.image.src}
                      className={classes.Avatar}
                    />
                  </div>
                </Grid>
                <Grid item lg={10} xs={12}>
                  <Typography gutterBottom variant="h4" component="h2">
                    {data.text.title}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h3">
                    {data.text.subtitle}
                  </Typography>
                  {data.text.content.map(paragraph => (
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                      paragraph
                      key={paragraph}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            </CardContent>
            <CardActions className={classes.Actions}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<GitHubIcon />}
                href={data.social.github}
                style={{ backgroundColor: colors.primary }}
              >
                FOLLOW ME ON GITHUB
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<LinkedIn />}
                href={data.social.linkedin}
                style={{ backgroundColor: colors.primary }}
              >
                CONTACT ME ON LINKEDIN
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Bio;
