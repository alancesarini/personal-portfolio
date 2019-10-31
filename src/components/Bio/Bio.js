import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import classes from "./Bio.module.css";
import data from "../../data/bio";
import Grid from "@material-ui/core/Grid";

const Bio = props => {
  useEffect(() => {
    console.log("loaded BIO!");
  });
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card className={classes.Bio}>
          <CardMedia
            component="img"
            alt={data.image.title}
            height={data.image.height}
            image={data.image.src}
            title={data.image.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="h2">
              {data.text.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h3">
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
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Bio;
