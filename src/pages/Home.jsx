import {
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Home() {
  const theme = useTheme();

  return (
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
        textAlign: "left", // ✅ LEFT ALIGNED ALWAYS
      }}
    >
      {/* LEFT — TEXT */}
      <Box sx={{ flex: 1 }}>
        {/* Badge */}
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

        <Typography variant="h2" fontWeight={700} lineHeight={1.1}>
          Hello, I’m
        </Typography>

        <Typography
          variant="h2"
          fontWeight={800}
          lineHeight={1.1}
          color="primary.main"
          sx={{ mt: 0.5 }}
        >
          Vipul Dhiman
        </Typography>

        <Typography
          sx={{
            mt: 2,
            color: theme.palette.text.secondary,
            maxWidth: 480,
            fontSize: "1rem",
          }}
        >
          Technicahl Support Analytics Consultant
        </Typography>

        {/* BUTTONS */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          {/* ✅ WORKING CONTACT BUTTON * Also an mbox for Adobe Target */}
         <div id="contact-button-container">
  <Button
    component={NavLink}
    to="/contact"
    variant="contained"
    sx={{
      borderRadius: "999px",
      px: 4,
      py: 1.2,
      textTransform: "none",
      width: { xs: "100%", sm: "auto" },
    }}
  >
    Contact Me →
  </Button>
</div>



          <Button
            variant="outlined"
            sx={{
              borderRadius: "999px",
              px: 4,
              py: 1.2,
              textTransform: "none",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Download Resume
          </Button>
        </Box>
      </Box>

      {/* RIGHT — IMAGE (VISIBLE ON MOBILE TOO) */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pb: { xs: 6, md: 0 }, // ✅ SPACE FOR FLOATING BADGE
        }}
      >
        {/* Glow */}
        <Box
          sx={{
            position: "absolute",
            top: -16,
            right: -16,
            width: "100%",
            maxWidth: 420,
            height: 360,
            borderRadius: 6,
            bgcolor:
              theme.palette.mode === "dark"
                ? "rgba(120, 220, 200, 0.18)"
                : "rgba(120, 220, 200, 0.25)",
            zIndex: 0,
          }}
        />

        {/* Image Card */}
        <Paper
          elevation={0}
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: 380,
            p: 2,
            borderRadius: 6,
            bgcolor: theme.palette.background.paper,
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 40px 90px rgba(0,0,0,0.6)"
                : "0 40px 90px rgba(0,0,0,0.18)",
          }}
        >
          <Box
            component="img"
            src="https://img.freepik.com/premium-vector/hand-coding-concept-illustration_114360-8113.jpg"
            alt="Coding Illustration"
            sx={{
              width: "100%",
              objectFit: "contain",
              borderRadius: 4,
            }}
          />
        </Paper>

        {/* FLOATING BADGE */}
        <Paper
          elevation={0}
          sx={{
            position: "absolute",
            bottom: { xs: -1, md: -18 },
            right: 0,
            zIndex: 5, // ✅ NEVER HIDDEN
            px: 2,
            py: 1,
            display: { xs: "none", md: "flex" },
            borderRadius: "12px",
            alignItems: "center",
            gap: 1,
            bgcolor: theme.palette.background.paper,
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 10px 30px rgba(0,0,0,0.5)"
                : "0 10px 30px rgba(0,0,0,0.15)",
          }}
        >
          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: "8px",
              bgcolor: theme.palette.primary.main,
              color: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "0.75rem",
            }}
          >
            {"</>"}
          </Box>

          <Typography fontSize="0.85rem">
            Currently working on <br />
            <b>Full-Stack Projects</b>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
