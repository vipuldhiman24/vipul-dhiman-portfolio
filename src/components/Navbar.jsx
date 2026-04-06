import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  Menu,
  MenuItem,
} from "@mui/material";

import {
  LightMode,
  DarkMode,
  Menu as MenuIcon,
} from "@mui/icons-material";

import CodeIcon from "@mui/icons-material/Code";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";

import { NavLink, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Navbar() {

  const theme = useTheme();

  const { mode, toggleTheme } =
    useContext(ThemeContext);

  const location = useLocation();

  const isMobile =
    useMediaQuery(
      theme.breakpoints.down("md")
    );

  const isContact =
    location.pathname === "/contact";

  const [anchorEl, setAnchorEl] =
    useState(null);

  const openMenu = (event) =>
    setAnchorEl(event.currentTarget);

  const closeMenu = () =>
    setAnchorEl(null);

  const navLinkStyle = ({ isActive }) => ({

    textDecoration: "none",

    color: isActive
      ? theme.palette.primary.main
      : theme.palette.text.secondary,

    fontWeight:
      isActive ? 600 : 400,

    fontSize: "0.95rem",

    display: "flex",

    alignItems: "center",

    gap: 6

  });

  return (

    <AppBar

      position="absolute"

      elevation={0}

      sx={{

        bgcolor: "transparent",

        top: 25,

        zIndex:
          theme.zIndex.appBar

      }}

    >

      <Toolbar

        sx={{

          maxWidth: 1100,

          width: "100%",

          mx: "auto",

          px: 3,

          py: 1,

          bgcolor:
            theme.palette.background.paper,

          borderRadius: "999px",

          boxShadow:

            mode === "dark"

              ? "0 10px 30px rgba(0,0,0,0.5)"

              : "0 10px 30px rgba(0,0,0,0.12)",

          display: "flex",

          justifyContent:
            "space-between"

        }}

      >

        {/* LOGO */}

        <Typography

          component={NavLink}

          to="/"

          sx={{

            display: "flex",

            alignItems: "center",

            gap: 1,

            textDecoration: "none",

            fontWeight: 700,

            color: "text.primary"

          }}

        >

          <Box

            sx={{

              width: 28,

              height: 28,

              borderRadius: "50%",

              display: "flex",

              alignItems: "center",

              justifyContent:
                "center",

              backgroundColor:
                "primary.main"

            }}

          >

            <CodeIcon

              sx={{

                fontSize: 16,

                color:
                  "background.paper"

              }}

            />

          </Box>

          Vipul Dhiman

        </Typography>

        {/* CENTER */}

        {!isMobile ? (

          <Box

            sx={{

              display: "flex",

              gap: 3

            }}

          >

            <NavLink

              to="/about"

              style={navLinkStyle}

            >

              About

            </NavLink>

            <NavLink

              to="/projects"

              style={navLinkStyle}

            >

              Projects

            </NavLink>

            <NavLink

              to="/skills"

              style={navLinkStyle}

            >

              Skills

            </NavLink>

            {/* SOUNDS */}

            <NavLink

              to="/sounds"

              style={navLinkStyle}

            >

              <GraphicEqIcon

                sx={{

                  fontSize: 18,

                  opacity: 0.85

                }}

              />

              Sounds

            </NavLink>

          </Box>

        ) : (

          <>

            <IconButton
              onClick={openMenu}
            >

              <MenuIcon />

            </IconButton>

            <Menu

              anchorEl={anchorEl}

              open={Boolean(anchorEl)}

              onClose={closeMenu}

              PaperProps={{

                sx: {

                  borderRadius: 3,

                  mt: 1,

                  bgcolor:
                    theme.palette.background.paper

                }

              }}

            >

              <MenuItem

                component={NavLink}

                to="/about"

                onClick={closeMenu}

              >

                About

              </MenuItem>

              <MenuItem

                component={NavLink}

                to="/projects"

                onClick={closeMenu}

              >

                Projects

              </MenuItem>

              <MenuItem

                component={NavLink}

                to="/skills"

                onClick={closeMenu}

              >

                Skills

              </MenuItem>

              <MenuItem

                component={NavLink}

                to="/sounds"

                onClick={closeMenu}

                sx={{

                  display: "flex",

                  gap: 1

                }}

              >

                <GraphicEqIcon
                  fontSize="small"
                />

                Sounds

              </MenuItem>

              <MenuItem

                component={NavLink}

                to="/contact"

                onClick={closeMenu}

              >

                Contact

              </MenuItem>

            </Menu>

          </>

        )}

        {/* RIGHT */}

        <Box

          sx={{

            display: "flex",

            alignItems: "center",

            gap: 1

          }}

        >

          <IconButton
            onClick={toggleTheme}
          >

            {mode === "dark"

              ? <LightMode />

              : <DarkMode />}

          </IconButton>

          {!isMobile && !isContact && (

            <Button

              component={NavLink}

              to="/contact"

              sx={{

                borderRadius:
                  "999px",

                px: 5,

                py: 1.2,

                textTransform:
                  "none",

                fontWeight: 600,

                backgroundColor:
                  "primary.main",

                color: "#fff"

              }}

            >

              Contact Me

            </Button>

          )}

        </Box>

      </Toolbar>

    </AppBar>

  );

}