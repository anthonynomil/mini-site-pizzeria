import React from "react";
import { Paper, Grid, Container, Typography } from "@mui/material";
const Welcome = () => {
  return (
    <div id="home">
      <Container maxWidth="xl">
        <Paper elevation={3}>
          <Typography
            variant="h2"
            fontWeight="400"
            align="center"
            padding="20px 0"
            marginTop="150px"
            textAlign="center"
            color="inherited"
            sx={{ userSelect: "none" }}
          >
            Welcome to Pizza Palace
          </Typography>
        </Paper>
      </Container>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={4}
          marginTop="100px"
          justifyContent="center"
          align="center"
        >
          <Grid item md={6} xs={11}>
            <Typography variant="h3" color="inherit" marginBottom="25px">
              Lorem, ipsum dolor.
            </Typography>
            <img
              src="img/icon-black.png"
              className="home_img"
              alt="About icon"
            />
            <Typography
              className="home_bigText"
              variant="body1"
              color="inherit"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              culpa ex fugit, vero reprehenderit excepturi asperiores inventore
              perferendis magni quaerat nam ipsam, aliquid necessitatibus
              deserunt beatae unde magnam animi tempore nihil quibusdam facere
              iste? Vitae nobis recusandae odit distinctio neque, nisi enim
              porro est tempora qui modi id quam magni rerum doloremque magnam
              natus! Voluptates asperiores autem consectetur obcaecati
              perspiciatis, molestiae quas soluta itaque. Quos, excepturi! Non
              ab itaque nostrum ex quos veritatis? Harum illum vel inventore
              molestiae eum architecto labore facere, temporibus natus
              perspiciatis amet et perferendis dolor laboriosam aut tenetur,
              officia beatae esse vero nostrum, iusto debitis ducimus!
            </Typography>
          </Grid>
          <Grid item md={6} xs={11}>
            <img className="home_img" src="img/pr1.png" alt="About" />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          marginTop="100px"
          justifyContent="center"
          align="center"
        >
          <Grid item md={6} xs={11}>
            <img className="home_img" src="img/pr2.png" alt="About" />
          </Grid>
          <Grid item md={6} xs={11}>
            <Typography variant="h3" color="inherit" marginBottom="25px">
              Lorem, ipsum dolor.
            </Typography>
            <img
              src="img/icon-black.png"
              className="home_img"
              alt="About icon"
            />
            <Typography
              className="home_bigText"
              variant="body1"
              color="inherit"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              culpa ex fugit, vero reprehenderit excepturi asperiores inventore
              perferendis magni quaerat nam ipsam, aliquid necessitatibus
              deserunt beatae unde magnam animi tempore nihil quibusdam facere
              iste? Vitae nobis recusandae odit distinctio neque, nisi enim
              porro est tempora qui modi id quam magni rerum doloremque magnam
              natus! Voluptates asperiores autem consectetur obcaecati
              perspiciatis, molestiae quas soluta itaque. Quos, excepturi! Non
              ab itaque nostrum ex quos veritatis? Harum illum vel inventore
              molestiae eum architecto labore facere, temporibus natus
              perspiciatis amet et perferendis dolor laboriosam aut tenetur,
              officia beatae esse vero nostrum, iusto debitis ducimus!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Welcome;
