// src/pages/Sounds.jsx

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Box
} from "@mui/material";

import { ThemeContext } from "../ThemeContext";
import soundsData from "../assets/Sounds.json";

export default function Sounds() {

  const { mode } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>

      <Typography
        variant="h5"
        fontWeight="600"
        gutterBottom
      >
        Sounds
      </Typography>

      <Typography
        variant="body2"
        sx={{ mb: 3, opacity: 0.6 }}
      >
        Choose an ambience to explore
      </Typography>

      <Grid container spacing={2}>

        {soundsData.slice(0, 9).map((sound) => (

          <Grid
            item
            xs={6}
            sm={4}
            key={sound["entity.id"]}
          >

            <Card

              onClick={() =>
                navigate(`/sounds/${sound["entity.id"]}`)
              }

              sx={{

                borderRadius: 2,

                overflow: "hidden",

                transition: "0.2s",

                cursor: "pointer",

                background:
                  mode === "dark"
                    ? "#1e1e1e"
                    : "#fff",

                "&:hover": {

                  transform: "translateY(-4px)",

                  boxShadow: 4
                }
              }}
            >

              <CardMedia
                component="img"
                height="120"
                image={sound["entity.thumbnailUrl"]}
                alt={sound["entity.name"]}
              />

              <CardContent sx={{ p: 1.5 }}>

                <Typography
                  fontSize={14}
                  fontWeight={600}
                  noWrap
                >
                  {sound["entity.name"]}
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  mt={0.5}
                >

                  <Chip
                    label={sound["entity.message"]}
                    size="small"
                    sx={{ height: 18, fontSize: 10 }}
                  />

                </Stack>

                <Typography
                  fontSize={11}
                  sx={{ opacity: 0.6, mt: 0.5 }}
                >
                  {Math.round(sound["entity.value"] / 60)} min
                </Typography>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>

    </Container>
  );
}