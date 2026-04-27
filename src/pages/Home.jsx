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
    const runTarget = () => {
      if (window.adobe?.target) {
        window.adobe.target.getOffer({
          request: {
            execute: {
              mboxes: [
                {
                  name: "home-page-mbox",
                  index: 0,

                  // ✅ OPTIONAL BUT IMPORTANT (context)
                  parameters: {
                    pageName: "home",
                    userType: "guest",
                  },
                },
              ],
            },
          },

          success: function (response) {
            window.adobe.target.applyOffer({
              response: response,
              selector: "#home-page-target",
            });
          },

          error: function (status, error) {
            console.error("Target error:", status, error);
          },
        });
      }
    };

    // ✅ Ensure DOM is ready before firing
    if (document.readyState === "complete") {
      runTarget();
    } else {
      window.addEventListener("load", runTarget);
      return () => window.removeEventListener("load", runTarget);
    }
  }, []);

  return (
    <div id="home-page-target">
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
          <Typography sx={{ mb: 2 }}>●</Typography>

          <Typography variant="h2" fontWeight={700}>
            Hello, I’m
          </Typography>

          {/* ✅ Add granular hooks */}
          <Typography
            id="hero-name"
            variant="h2"
            fontWeight={800}
            color="primary.main"
          >
            Vipul Dhiman
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Full Stack Software Engineer with 2 years of experience
            in Java, Spring Boot, REST APIs, SQL, and React.
          </Typography>

          <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
            <Button
              id="cta-contact"
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

        {/* RIGHT */}
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
