import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import GitHubIcon from "@material-ui/icons/GitHub";
import classes from "./Projects.module.css";
import projects from "../../data/projects";
import Page from "../../hoc/Page";

const Projects = () => {
  return (
    <Page>
      <Grid container spacing={2}>
        {projects.map(project => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={project.name}>
            <Card className={classes.Project}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  paragraph
                >
                  {project.description}
                </Typography>
                {project.tags.map(tag => (
                  <Chip
                    className={classes.Tag}
                    size="small"
                    label={tag}
                    key={tag}
                  />
                ))}
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="#fafafa"
                  size="small"
                  startIcon={<GitHubIcon />}
                  href={project.link}
                >
                  VIEW ON GITHUB
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Page>
  );
};

export default Projects;
