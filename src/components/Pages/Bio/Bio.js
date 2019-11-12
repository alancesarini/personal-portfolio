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
import ArrowForward from "@material-ui/icons/ArrowForward";
import Link from "@material-ui/icons/Link";
import { colors } from "../../../constants/colors";
import Chip from "@material-ui/core/Chip";
import parse from "html-react-parser";

const Bio = props => {
  return (
    <Page>
      <PageTitle title="About me" />
      <Grid container justify="center" spacing={2}>
        <Grid item lg={6} md={6} xs={12}>
          <Card className={classes.Bio}>
            <div className={classes.CardHeader}>
              <Typography variant="h6" component="h5">
                Bio
              </Typography>
            </div>
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
                      {parse(paragraph)}
                    </Typography>
                  ))}
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                    paragraph
                  >
                    Check out <a href="/projects">some of my code</a>.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions className={classes.Actions}>
              <Grid container spacing={2}>
                <Grid item lg={2} xs={false}></Grid>
                <Grid item lg={5} xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<GitHubIcon />}
                    href={data.social.github}
                    style={{ backgroundColor: colors.primary }}
                    className={classes.SocialButton}
                  >
                    FOLLOW ME ON GITHUB
                  </Button>
                </Grid>
                <Grid item lg={5} xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<LinkedIn />}
                    href={data.social.linkedin}
                    style={{ backgroundColor: colors.primary }}
                    className={classes.SocialButton}
                  >
                    CONTACT ME ON LINKEDIN
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>

        <Grid item lg={3} md={6} xs={12}>
          <Card className={classes.Bio}>
            <div className={classes.CardHeader}>
              <Typography variant="h6" component="h5">
                Skills
              </Typography>
            </div>
            <CardContent>
              {data.skills.map(skill => (
                <Chip label={skill} key={skill} className={classes.Skill} />
              ))}
            </CardContent>
          </Card>
          <Card className={classes.Bio}>
            <div className={classes.CardHeader}>
              <Typography variant="h6" component="h5">
                Latest courses taken
              </Typography>
            </div>
            <CardContent>
              <ul className={classes.CourseList}>
                {data.courses.map(course => (
                  <li key={course.name} className={classes.CourseListItem}>
                    <ArrowForward
                      className={classes.ArrowBullet}
                      fontSize="inherit"
                    />{" "}
                    {course.name}
                    <a href={course.link}>
                      <Link className={classes.LinkIcon} />
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Bio;
