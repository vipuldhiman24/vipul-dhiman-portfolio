import { Box, Paper, Typography, useTheme } from "@mui/material";
import StorageIcon from "@mui/icons-material/Storage";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import BuildIcon from "@mui/icons-material/Build";

const skills = [
  {
    title: "Frontend",
    icon: <CodeIcon />,
    items: [
      "React (Hooks, Functional Components)",
      "JavaScript (ES6+)",
      "Material UI (MUI)",
      "HTML5 & CSS3",
      "Responsive UI Design",
      "REST API Integration",
    ],
  },
  {
    title: "Backend",
    icon: <BuildIcon />,
    items: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "RESTful APIs",
      "Microservices Architecture",
      "JWT Authentication",
      "Spring Security (Basics)",
    ],
  },
  {
    title: "Databases & Cloud",
    icon: <CloudIcon />,
    items: [
      "PostgreSQL",
      "MySQL",
      "Snowflake",
      "Azure (AZ-900 Certified)",
      "Google Cloud (Basics)",
      "Docker (Basics)",
    ],
  },
  {
    title: "Tools",
    icon: <StorageIcon />,
    items: [
      "Git & GitHub",
      "JIRA",
      "Postman",
      "VS Code",
      "IntelliJ IDEA",
    ],
  },
];

export default function Skills() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        maxWidth: 1100,
        mx: "auto",
        py: 0,
        px: 0,
      }}
    >
      {/* Section Header */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h4" fontWeight={700}>
          Technical Expertise
        </Typography>
        <Typography
          sx={{
            mt: 1,
            color: theme.palette.text.secondary,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Technologies and tools I use to build reliable, scalable, and
          production-ready applications.
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(4, 1fr)",
            
          },
          gap: 3,
        }}
      >
        {skills.map((section) => (
          <Paper
            key={section.title}
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              bgcolor: theme.palette.background.paper,
              boxShadow: "none",
        transition: "all 0.25s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 12px 30px rgba(0,0,0,0.5)"
              : "0 12px 30px rgba(0,0,0,0.12)",
        },
            }}
          >
            {/* Card Header */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  bgcolor: theme.palette.primary.main,
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {section.icon}
              </Box>
              <Typography fontWeight={600}>{section.title}</Typography>
            </Box>

            {/* List */}
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              {section.items.map((item) => (
                <Typography
                  key={item}
                  component="li"
                  sx={{
                    fontSize: "0.9rem",
                    mb: 0.8,
                    color: theme.palette.text.secondary,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
