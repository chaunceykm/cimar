import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  CardHeader,
} from "@material-ui/core";
import Kerri from "../../assets/kerri.jpg";
import Tony from "../../assets/tony.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '15px'
  },
  card: {
    maxWidth: "400px",
  },
  image: {
    height: "350px",
  },
  info: {
    justifyContent: 'center',
    paddingLeft: '20px'
  },
  team: {
    justifyContent: 'center'
  },
}));

export const About = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.info} xs={5}>
        <Typography variant="h4">
          What is "Cuz i Matter" and what does it do?
        </Typography>
        <Typography variant="body2">
          "Cuz i Matter" Animal Rescue is a non-profit, 501(c)(3) organization
          dedicated to the rescue, care, rehabilitation, and adoption of
          homeless dogs.
          <br />
          <br />
          Our main goals are to:
        </Typography>
        <List>
          <ListItem>
            Remove animals from homeless situations or from shelters with
            euthanasia lists.
          </ListItem>
          <ListItem>
            Secure foster homes for those in longer need situations pre
            adoption.
          </ListItem>
          <ListItem>
            Provide vaccine & spay/neuter services to all CiMAR intakes before
            adoption.
          </ListItem>
          <ListItem>
            Provide medical care and rehabilitation as neccessary.
          </ListItem>
          <ListItem>
            Place our animals in secure, responsible and loving forever homes.
          </ListItem>
        </List>
        <Typography variant="body2">
          CiMAR is a volunteer-run, foster-based organization that depends
          entirely on donations and community support. Come check us out and
          join us. Together we can save lives!
        </Typography>
      </Grid>

      <Grid container item className={classes.team} xs={7} spacing={8}>
        <Grid item >
          <Card className={classes.card}>
            <CardMedia
              className={classes.image}
              component="img"
              alt="Kerri"
              height="150"
              image={Kerri}
              title="Kerri"
            />
            <CardHeader />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Kerri Bonacci
              </Typography>
              <Typography variant="subtitle2">
                Executive Director/President
                <br />
                <br />
              </Typography>
              <Typography variant="body2">
                Kerri had a dream most of her life to start a rescue. With
                heart, determination and some help from her family, that dream
                has become a reality. Kerri grew up loving animals. Her parents
                were always saving strays and rescues. Kerri comes by her deep
                compassion for saving honestly.
                <br />
                <br />
                In 2012, Kerri started fostering with Austin Boxer Rescue. Her
                first foster was nanny and the number grew from there. To date,
                Kerri (along with her husband, Tony) has fostered 39 dogs. This
                includes the newest rescues and CiMAR's first dogs, Ellie Mae
                and her brood of eight puppies.
                <br />
                <br />
                Kerri has also given her time and love to San Antonio Pets
                Alive! and Pflugerville Pets Alive!, wehre she resided on the
                board.
                <br />
                <br />
                By trade, Kerri is a pharmasist.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.team}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.image}
              component="img"
              alt="Tony"
              height="150"
              image={Tony}
              title="Tony"
            />
            <CardHeader />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Tony Bonacci
              </Typography>
              <Typography variant="subtitle2">
                Computer IT/ Vice-President
                <br />
                <br />
              </Typography>
              <Typography variant="body2">
                Tony comes to "Cuz i Matter" Animal Rescue as the other half of
                Team Bonacci. Tony's love of animals has been evident throughout
                his life. He was the loving dad to his own felines before
                meeting now-wife, Kerri. Tony is the grounding force that has
                helped Kerri move full force into starting a rescue that gives
                animals a voice to say "I matter!"
                <br />
                <br />
                Tony's background and interest in computers brings a variety of
                skills to the table for CiMAR. From setting up groups,
                developing organization agreements and forms to photographing
                all those fuzzy faces for their shining moments online, Tony is
                tireless in his dedication to all the residents of the CiMAR
                family.
                <br />
                <br />
                Together, Kerri and Tony are the foster directors responsible
                for recruiting special participants to act.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
