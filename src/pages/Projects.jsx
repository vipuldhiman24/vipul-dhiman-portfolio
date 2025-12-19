import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function Projects() {
  const theme = useTheme();

  const projects = [
    {
      title: "Auth System ",
      desc:
        "JWT-based authentication and authorization system built using Spring Boot microservices. Includes user management, token generation, validation, and secure REST APIs with SQL-backed persistence.",
      image: "https://cdn.vectorstock.com/i/500p/73/89/secure-login-vector-37727389.jpg?utm_source=chatgpt.com",
      tags: ["Spring Boot", "Spring Security","JPA","REST APIs","Backend Development", "JWT", "SQL"],
      github: "https://github.com/vipuldhiman24/auth-service-jwt.git",
      live: "https://github.com/vipuldhiman24/auth-service-jwt.git",
    },
    {
      title: "Maintenance Portal (Microservices Backend)",
      desc:
        "Backend-driven maintenance management system built using multiple Spring Boot microservicest that communicate using RestTemplate having seperate DB in   PostgreSQL and Docker Compose orchestration.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tags: ["Spring Boot", "Microservices","RESTful APIs","Backend Development","API Development","Inter-Service Communication","PostgreSQL", "Docker"],
      github: "https://github.com/vipuldhiman24/Maintenanceportal.git",
      live: "https://github.com/vipuldhiman24/Maintenanceportal.git",
    },
    {
      title: "Shlok A Day (Full Stack)",
      desc:
        "Full stack application delivering daily shlokas with keyword-based browsing using Spring Boot REST APIs and React frontend.",
      image: "https://th.bing.com/th/id/OIP.zE-wstWsxkey8GbXirw1RwHaFo?w=237&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.4&pid=1.7&rm=3&ucfimg=1",
      tags: ["React", "Spring Boot","Full Stack Development","Java","API Integration", "REST API", "SQL"],
      github: "https://github.com/vipuldhiman24/shlok-a-day",
      live: "https://github.com/vipuldhiman24/shlok-a-day-client.git",
    },
    {
      title: "Learning Platform Console (API Gateway)",
      desc:
        "Backend console implementing Spring Cloud Gateway for centralized routing and scalable microservices architecture.",
      image: "https://images.unsplash.com/photo-1581905764498-f1b60bae941a",
     tags: [
              "Java",
              "Spring Boot",
              "Spring Cloud Gateway",
              "API Gateway",
              "Microservices Architecture",
              "REST APIs",
              "Request Routing",
              "Centralized API Management",
              "Distributed Systems"
            ],
      github: "https://github.com/vipuldhiman24/courses-platform-microservices.git",
      live: "https://github.com/vipuldhiman24/courses-platform-microservices.git",
    },
  ];

  return (
    <Box sx={{ py: 2 }}>
      <Box sx={{ maxWidth: 1100, mx: "auto", px: 2 }}>
        <Typography variant="h4" fontWeight={700}>
          Featured Projects
        </Typography>

        <Typography
          sx={{
            mt: 1,
            maxWidth: 650,
            color: theme.palette.text.secondary,
          }}
        >
          Selected projects showcasing full-stack development and system design.
        </Typography>

        <Stack spacing={4} sx={{ mt: 5 }}>
          {projects.map((project, index) => (
            <ProjectRow key={index} project={project} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

/* ---------------- PROJECT ROW ---------------- */

function ProjectRow({ project }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: { md: 220 }, // 🔒 FIXED HEIGHT (desktop)
        borderRadius: 4,
        overflow: "hidden",
        bgcolor: theme.palette.background.paper,
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 14px 32px rgba(0,0,0,0.5)"
              : "0 14px 32px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* IMAGE */}
      <CardMedia
        component="img"
        image={project.image}
        alt={project.title}
        sx={{
          width: { xs: "100%", md: 260 },
          height: { xs: 180, md: "100%" },
          objectFit: "cover",
          flexShrink: 0,
        }}
      />

      {/* CONTENT */}
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          py: 2,
        }}
      >
        {/* TEXT */}
        <Box>
          <Typography fontWeight={600} fontSize="1.05rem">
            {project.title}
          </Typography>

          <Typography
            sx={{
              mt: 1,
              fontSize: "0.9rem",
              color: theme.palette.text.secondary,
              display: "-webkit-box",
              WebkitLineClamp: 3, // 🔒 clamps height
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.desc}
          </Typography>
        </Box>

        {/* TAGS + LINKS */}
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" />
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            {project.github && (
              <IconButton
                component="a"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            )}

            {project.live && (
              <IconButton
                component="a"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <OpenInNewIcon fontSize="small" />
              </IconButton>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
