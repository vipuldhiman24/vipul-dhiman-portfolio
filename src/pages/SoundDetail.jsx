import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import soundsData from "../assets/Sounds.json";

import {
  Box,
  Typography,
  Container,
  Chip,
  Stack,
  Paper,
  LinearProgress,
  IconButton
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function SoundDetail() {
  const { id } = useParams();        // e.g. "S001"
  const navigate = useNavigate();

  // Find current sound from your local JSON feed
  const sound = soundsData.find(s => s["entity.id"] === id);

  // If sound not found, render nothing
  if (!sound) return null;

  const minutes = Math.round(sound["entity.value"] / 60);

  return (
    <Box>
      {/* HERO IMAGE */}
      <Box
        sx={{
          height: "52vh",
          backgroundImage: `url(${sound["entity.thumbnailUrl"]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottomLeftRadius: 28,
          borderBottomRightRadius: 28,
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.15), rgba(0,0,0,0))"
          }}
        />

        {/* back button */}
        <IconButton
          onClick={() => navigate(-1)}
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(6px)",
            color: "white"
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        {/* title */}
        <Box
          sx={{
            position: "absolute",
            bottom: 24,
            left: 20,
            right: 20,
            color: "white"
          }}
        >
          <Typography variant="h4" fontWeight="600">
            {sound["entity.name"]}
          </Typography>

          <Stack direction="row" spacing={1} mt={1}>
            <Chip
              label={sound["entity.message"]}
              size="small"
              sx={{
                background: "rgba(255,255,255,0.18)",
                color: "white"
              }}
            />
            <Chip
              label={sound["entity.categoryId"]}
              size="small"
              sx={{
                background: "rgba(255,255,255,0.12)",
                color: "white"
              }}
            />
          </Stack>
        </Box>
      </Box>

      {/* CONTENT */}
      <Container maxWidth="sm" sx={{ mt: 3 }}>
        {/* glass card */}
        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            borderRadius: 4,
            backdropFilter: "blur(12px)",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)"
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.75 }}>
            immersive ambient sound designed for{" "}
            {sound["entity.message"].toLowerCase()}
          </Typography>

          {/* attributes */}
          <Stack
            direction="row"
            spacing={1}
            mt={2}
            flexWrap="wrap"
          >
            <Chip label={`${minutes} min`} />
            <Chip label={sound["entity.custom2"]} />
            <Chip label={`${sound["entity.custom3"]} intensity`} />
            <Chip label={`best at ${sound["entity.custom4"]}`} />
          </Stack>

          {/* popularity */}
          <Box mt={3}>
            <Typography fontSize={13} sx={{ mb: 0.5 }}>
              popularity
            </Typography>
            <LinearProgress
              variant="determinate"
              value={sound["entity.custom1"]}
              sx={{
                height: 6,
                borderRadius: 4
              }}
            />
          </Box>
        </Paper>

        {/* recommendations – VEC will own this area */}
        <Box mt={5} id="similar-sounds-section">
          <Typography variant="h6" fontWeight="600">
            similar sounds
          </Typography>

          <Typography
            fontSize={13}
            sx={{ opacity: 0.6, mb: 2 }}
          >
            powered by adobe target
          </Typography>

          {/* Target VEC 3×1 Recommendations can replace or insert content here */}
          <Box id="vec-recommendations-placeholder" />
        </Box>
      </Container>
    </Box>
  );
}
