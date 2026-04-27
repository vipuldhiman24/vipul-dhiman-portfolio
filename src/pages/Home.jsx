import {
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const theme = useTheme();

  useEffect(() => {
    if (window.adobe && window.adobe.target) {
      window.adobe.target.getOffer({
        request: {
          execute: {
            mboxes: [
              {
                name: "home-page-mbox", // 🔑 Target mbox name
                index: 0,
              },
            ],
          },
        },
        success: function (response) {
          window.adobe.target.applyOffer({
            response: response,
            selector: "#home-page-target", // 🎯 where offer applies
          });
        },
        error: function (status, error) {
          console.error("Target error:", status, error);
        },
      });
    }
  }, []);

  return (
    <div id="home-page-target"> {/* ✅ TARGET WRAPPER */}
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          minHeight: "85vh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 6, md: 6 },
          px: { xs: 2, md: 0 },
          textAlign: "left",
        }}
      >
        {/* LEFT — TEXT */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0.6,
              mb: 2,
              borderRadius: "999px",
              fontSize: "0.8rem",
              fontWeight: 600,
              bgcolor:
                theme.palette.mode === "dark"
                  ? "rgba(79,131,255,0.18)"
                  : "rgba(79,131,255,0.12)",
              color: "primary.main",
            }}
          >
            ●
          </Typography>

          <Typography variant="h2" fontWeight={700}>
            Hello, I’m
          </Typography>

          <Typography
            variant="h2"
            fontWeight={800}
            color="primary.main"
          >
            Vipul Dhiman
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: theme.palette.text.secondary,
              maxWidth: 480,
            }}
          >
            Full Stack Software Engineer with 2 years of experience
            in Java, Spring Boot, REST APIs, SQL, and React.
          </Typography>

          <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
            <Button
              component={NavLink}
              to="/contact"
              variant="contained"
            >
              Contact Me →
            </Button>

            <Button variant="outlined">
              Download Resume
            </Button>
          </Box>
        </Box>

        {/* RIGHT — IMAGE */}
        <Box sx={{ flex: 1 }}>
          <Paper sx={{ p: 2 }}>
            <Box
              component="img"
              src="https://img.freepik.com/premium-vector/hand-coding-concept-illustration_114360-8113.jpg"
              alt="Coding"
              sx={{ width: "100%" }}
            />
          </Paper>
        </Box>
      </Box>
    </div>
  );
}