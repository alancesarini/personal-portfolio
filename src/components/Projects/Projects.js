import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import GitHubIcon from "@material-ui/icons/GitHub";
import classes from "./Projects.module.css";
import projects from "../../data/projects";
import Page from "../hoc/Page";
import { colors } from "../../constants/colors";

const Projects = () => {
  const tags = [];
  projects.forEach(project => {
    project.tags.forEach(tag => {
      if (!tags.find(t => t === tag)) {
        tags.push(tag);
      }
    });
  });

  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleClick = clickedTag => {
    const updatedProjects = projects.filter(project =>
      project.tags.find(tag => tag === clickedTag)
    );
    setFilteredProjects(updatedProjects);
  };

  return (
    <Page>
      <Grid container spacing={2} className={classes.FilterContainer}>
        <Grid item xs={12} lg={9}>
          <Paper className={classes.Filter}>
            {tags.map(tag => (
              <Chip
                label={tag}
                key={tag}
                clickable
                onClick={() => handleClick(tag)}
                className={classes.Tag}
              />
            ))}
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {filteredProjects.map(project => (
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
                  color="primary"
                  size="small"
                  startIcon={<GitHubIcon />}
                  href={project.link}
                  style={{ backgroundColor: colors.primary }}
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
