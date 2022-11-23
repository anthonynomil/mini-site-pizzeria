import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { LocalPizza } from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;
const navItems = {
  0: {
    href: "#home",
    text: "Home",
  },
  1: {
    href: "#menu",
    text: "Menu",
  },
  2: {
    href: "#pizzaMaker",
    text: "Pizza Maker",
  },
};

const Appbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", my: 2 }}>
      <LocalPizza sx={{ verticalAlign: "sub" }} />
      <Typography
        className="appbar_brand"
        variant="h6"
        noWrap
        component="a"
        href=""
        color="inherit"
        padding="0 1rem"
        sx={{ my: 2, userSelect: "none" }}
      >
        Pizza Palace
      </Typography>
      <Divider sx={{ my: 2 }} />
      <List>
        {Object.keys(navItems).map((key) => (
          <ListItem key={key} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              href={navItems[key].href}
            >
              <ListItemText primary={navItems[key].text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    // <div>
    //   <Box sx={{ flexGrow: 1 }}>
    //     <AppBar position='fixed' color='primary'>
    //       <Toolbar>
    //         <LocalPizza />
    //         <Typography
    //           className='appbar_brand'
    //           variant='button'
    //           noWrap
    //           component='a'
    //           href='/'
    //           color='inherit'
    //           padding='0 1rem'>
    //           Pizza Palace
    //         </Typography>
    //         <Button variant='text' color='inherit' href='#home'>
    //           Home
    //         </Button>
    //         <Button variant='text' color='inherit' href='#menu'>
    //           Menu
    //         </Button>
    //         <Button variant='text' color='inherit' href='#pizzaMaker'>
    //           Pizza Maker
    //         </Button>
    //       </Toolbar>
    //     </AppBar>
    //   </Box>
    // </div>

    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              flexDirection: "row",
              alignItems: "center",
              display: { xs: "none", sm: "flex" },
            }}
          >
            <LocalPizza
              sx={{
                display: { xs: "none", sm: "flex" },
              }}
            />
            <Typography
              className="appbar_brand"
              variant="button"
              noWrap
              component="a"
              href="/"
              color="inherit"
              padding="0 1rem"
              alignItems="center"
            >
              Pizza Palace
            </Typography>

            {Object.keys(navItems).map((key) => (
              <Button
                key={key}
                variant="text"
                color="inherit"
                href={navItems[key].href}
                sx={{ alignItems: "center" }}
              >
                {navItems[key].text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: false, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Appbar;
