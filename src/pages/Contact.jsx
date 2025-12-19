import {
  Box,
  Typography,
  Card,
  Stack,
  IconButton,
  useTheme,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";


export default function Contact() {
  const theme = useTheme();

 const contacts = [
  {
    title: "LinkedIn",
    subtitle: "Connect professionally →",
    icon: <LinkedInIcon />,
    link: "www.linkedin.com/in/vipul-d24",
  },
  {
    title: "GitHub",
    subtitle: "View my code →",
    icon: <GitHubIcon />,
    link: "https://github.com/vipuldhiman24",
  },
  {
    title: "Email",
    subtitle: "vipuldhiman24@gmail.com",
    icon: <EmailIcon />,
    link: "mailto:vipuldhiman24@gmail.com",
  },
  {
    title: "Phone",
    subtitle: "7042857001",
    icon: <PhoneIcon />,
    link: "tel:7042857001",
  },
];


  return (
    <Box sx={{ py: 0 }}>
      <Box sx={{ maxWidth: 1100, mx: "auto", px: 2 }}>
        {/* HEADER */}
        <Typography variant="h4" fontWeight={700}>
          Contact Me
        </Typography>

        <Typography
          sx={{
            mt: 1,
            maxWidth: 520,
            color: theme.palette.text.secondary,
          }}
        >
          Let's build something together. Reach out for collaborations,
          opportunities, or just to say hello.
        </Typography>

        {/* CARDS */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 5 }}
        >
          {contacts.map((item, index) => (
            <ContactCard key={index} item={item} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

/* ---------------- CARD ---------------- */

function ContactCard({ item }) {
  const theme = useTheme();

  return (
    <Card
      component="a"
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        flex: 1,
        textDecoration: "none",
        p: 3,
        borderRadius: 3,
        border: `1px solid ${theme.palette.divider}`,
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
      {/* ICON */}
      <IconButton
        disableRipple
        sx={{
          mb: 2,
          bgcolor:
            theme.palette.mode === "dark"
              ? "rgba(79,131,255,0.15)"
              : "rgba(79,131,255,0.1)",
          color: theme.palette.primary.main,
          width: 40,
          height: 40,
        }}
      >
        {item.icon}
      </IconButton>

      {/* TEXT */}
      <Typography fontWeight={600}>{item.title}</Typography>
      <Typography
        sx={{
          mt: 0.5,
          fontSize: "0.85rem",
          color: theme.palette.text.secondary,
        }}
      >
        {item.subtitle}
      </Typography>
    </Card>
  );
}
