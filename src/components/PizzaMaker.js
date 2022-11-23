import React, { useState } from "react";
import {
  Paper,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  RadioGroup,
  FormControlLabel,
  Radio,
  OutlinedInput,
  Checkbox,
  Container,
  ListItemText,
  Grid,
  Card,
  CardContent,
  CardActions,
  Slider,
} from "@mui/material";
import pizzaMakerValues from "../context/pizzaMakerValues";

// This is for the select menu in the ingredient part of the stepper
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// Steps for the stepper
const steps = ["Type of Pizza", "Ingredients", "Amount of ingredients"];

const PizzaMaker = () => {
  // Stepper
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // 1st step for the pizza maker
  // Size of the pizza
  const [size, setSize] = useState("");
  const pizzaSizeHandleChange = (event) => {
    setSize(event.target.value);
  };
  // Choosing the dough of the pizza
  const [dough, setDough] = useState("");
  const pizzaDoughHandleChange = (event) => {
    setDough(event.target.value);
  };
  // Getting the slices
  const [slices, setSlices] = useState("");
  const pizzaSlicesHandleChange = (event) => {
    setSlices(event.target.value);
  };

  // 2nd step of the pizza maker
  // This is for the selection of ingredient parts of the pizza maker
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const ingredientsHandleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedIngredients(
      typeof value === "string" ? value.split(",") : value
    );
  };

  // Numbers for the sliders
  const [sliderValue, setSliderValue] = useState(100);
  const slidersHandleChange = (event, newValue) => {
    setSliderValue(newValue);
    console.log(sliderValue);
  };

  const marks = [
    {
      value: 25,
      label: "25%",
    },
    {
      value: 50,
      label: "",
    },
    {
      value: 75,
      label: "",
    },
    {
      value: 100,
      label: "100%",
    },
    {
      value: 125,
      label: "",
    },
    {
      value: 150,
      label: "",
    },
    {
      value: 175,
      label: "",
    },
    {
      value: 200,
      label: "200%",
    },
  ];

  //useState for the ingredient sliders
  const [sliderTomato, setSliderTomato] = useState(100);
  const [sliderMozzarella, setSliderMozzarella] = useState(100);
  const [sliderBasil, setSliderBasil] = useState(100);
  const [sliderOliveOil, setSliderOliveOil] = useState(100);
  const [sliderOregano, setSliderOregano] = useState(100);
  const [sliderYeast, setSliderYeast] = useState(100);
  const [sliderSalame, setSliderSalame] = useState(100);
  const [sliderRicotta, setSliderRicotta] = useState(100);
  const [sliderParmigiano, setSliderParmigiano] = useState(100);
  const [sliderPepperoni, setSliderPepperoni] = useState(100);
  const [sliderLard, setSliderLard] = useState(100);
  const [sliderPorkRinds, setSliderPorkRinds] = useState(100);
  const [sliderGarlic, setSliderGarlic] = useState(100);
  const [sliderFontina, setSliderFontina] = useState(100);
  const [sliderGranaPadano, setSliderGranaPadano] = useState(100);
  const [sliderGorgonzol, setSliderGorgonzol] = useState(100);
  const [sliderCherryTomato, setSliderCherryTomato] = useState(100);
  const [sliderPineapple, setSliderPineapple] = useState(100);
  const [sliderHam, setSliderHam] = useState(100);

  function valuetext(value) {
    return `${value}%`;
  }

  return (
    <div id="pizzaMaker">
      <Container maxWidth="xl">
        <Paper>
          <Typography
            variant="h2"
            fontWeight="400"
            align="center"
            padding="20px 0"
            color="inherited"
            sx={{ userSelect: "none" }}
          >
            Make your pizza
          </Typography>
        </Paper>
        <div className="menu_items">
          <Box sx={{ width: "100%", marginTop: "50px", marginBottom: "100px" }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === 0 ? (
              <React.Fragment>
                <Typography
                  variant="h4"
                  marginTop="40px"
                  marginBottom="20px"
                  sx={{ userSelect: "none" }}
                >
                  Choose your pizza size :
                </Typography>
                <FormControl fullWidth>
                  <InputLabel id="pizza-size">Size</InputLabel>
                  <Select
                    labelId="pizza-size"
                    id="pizza-size"
                    value={size}
                    label="Size"
                    onChange={pizzaSizeHandleChange}
                  >
                    <MenuItem value={"small"}>Small - 20cm</MenuItem>
                    <MenuItem value={"medium"}>Medium - 33cm</MenuItem>
                    <MenuItem value={"big"}>Big - 40cm</MenuItem>
                    <MenuItem value={"huge"}>Huge - 50cm</MenuItem>
                  </Select>
                </FormControl>

                <Typography
                  variant="h4"
                  marginTop="40px"
                  marginBottom="20px"
                  sx={{ userSelect: "none" }}
                >
                  Choose your dough :
                </Typography>
                <FormControl fullWidth>
                  <InputLabel id="pizza-dough">Dough</InputLabel>
                  <Select
                    labelId="pizza-dough"
                    id="pizza-dough"
                    value={dough}
                    label="Dough"
                    onChange={pizzaDoughHandleChange}
                  >
                    <MenuItem value={"neapolitan"}>Neapolitan Crust</MenuItem>
                    <MenuItem value={"newYork"}>New York Crust</MenuItem>
                    <MenuItem value={"stLouis"}>St. Louis Crust</MenuItem>
                    <MenuItem value={"panPizza"}>Pan Pizza Crust</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <Typography variant="h4" marginTop="40px" maginBottom="20px">
                    Number of slices:
                  </Typography>
                  <RadioGroup
                    row
                    value={slices}
                    onChange={pizzaSlicesHandleChange}
                    sx={{ marginTop: "20px" }}
                  >
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="8" control={<Radio />} label="8" />
                    <FormControlLabel
                      value="12"
                      control={<Radio />}
                      label="12"
                    />
                    <FormControlLabel
                      value="16"
                      control={<Radio />}
                      label="16"
                    />
                    <FormControlLabel
                      value="24"
                      control={<Radio />}
                      label="24"
                    />
                  </RadioGroup>
                </FormControl>
              </React.Fragment>
            ) : null}
            {activeStep === 1 ? (
              <React.Fragment>
                <Typography
                  variant="h4"
                  color="inherit"
                  marginTop="40px"
                  marginBottom="20px"
                >
                  Choose your ingredients:{" "}
                </Typography>
                <FormControl sx={{ width: "90%", m: 2 }}>
                  <InputLabel>Ingredients</InputLabel>
                  <Select
                    multiple
                    value={selectedIngredients}
                    onChange={ingredientsHandleChange}
                    input={<OutlinedInput label="Ingredients" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {Object.keys(pizzaMakerValues).map((key) => (
                      <MenuItem key={key} value={pizzaMakerValues[key].title}>
                        <Checkbox
                          checked={
                            selectedIngredients.indexOf(
                              pizzaMakerValues[key].title
                            ) > -1
                          }
                        />
                        <ListItemText primary={pizzaMakerValues[key].title} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </React.Fragment>
            ) : null}
            {activeStep === 2 ? (
              <React.Fragment>
                <Typography
                  variant="h4"
                  marginTop="40px"
                  marginBottom="20px"
                  sx={{ userSelect: "none" }}
                >
                  Choose the amount of ingredients :
                </Typography>
                <Grid container justifyContent="center">
                  {selectedIngredients.map((ingredients) => (
                    <Grid
                      item
                      lg={2}
                      md={4}
                      sm={11}
                      xs={11}
                      sx={{
                        m: "10px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Card>
                        <CardContent>
                          <Box sx={{ width: 300, maxWidth: "90%" }}>
                            <Typography
                              component="div"
                              variant="h4"
                              color="inherit"
                              marginBottom="35px"
                            >
                              {ingredients}
                            </Typography>
                            <CardActions>
                              <Slider
                                aria-label="Small steps"
                                defaultValue={100}
                                getAriaValueText={valuetext}
                                step={25}
                                marks={marks}
                                min={25}
                                max={200}
                                id={selectedIngredients[key].id}
                                value={sliderValue}
                                valueLabelDisplay="on"
                                sx={{ color: "inherit" }}
                                onChange={slidersHandleChange}
                              />
                            </CardActions>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </React.Fragment>
            ) : null}
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </div>
      </Container>
    </div>
  );
};
export default PizzaMaker;
