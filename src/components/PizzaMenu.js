import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import menuCards from "../context/menuCards";
import {
  Card,
  CardActionArea,
  Grid,
  Paper,
  CardMedia,
  CardContent,
} from "@mui/material";

const PizzaMenu = () => {
  return (
    <div id="menu" className="pizza_menu">
      <Container maxWidth="xl">
        <Paper elevation={3}>
          <Typography
            variant="h2"
            fontWeight="400"
            align="center"
            padding="20px 0"
            color="inherited"
            sx={{ userSelect: "none" }}
          >
            Menu
          </Typography>
        </Paper>
        <div className="menu_items">
          <Grid
            container
            justifyContent="center"
            spacing={2}
            sx={{ my: "2rem" }}
          >
            {Object.keys(menuCards).map((key) => (
              <Grid item md={6} sm={11} lg={4} key={key}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      title={menuCards[key].title}
                      image={menuCards[key].image}
                      alt={menuCards[key].alt}
                      width="400px"
                      height="300px"
                    />
                    <CardContent>
                      <Typography variant="h4" color="inherit">
                        {menuCards[key].title}
                      </Typography>
                      <Typography
                        variant="overline"
                        color="inherit"
                        marginTop="25px"
                      >
                        {menuCards[key].desc}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default PizzaMenu;
