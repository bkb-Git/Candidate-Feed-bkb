import { Typography, Button, Box, Card } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React, { useEffect } from "react";
import blur from "../assets/blur_bg_3.jpg";
import LogoContra from "../assets/LogoContra";

const Login = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });

  const theme = createTheme({
    shadows: ["none"],
  });

  return (
    <Box className="login">
      <Box className="login__bg">
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "100vh",
            filter: "blur(2rem)",
          }}
          className="login__back-bg"
          src={blur}
          alt=""
        />
      </Box>
      <Box className="login__banner">
        <LogoContra />
      </Box>

      <Box className="login__page">
        <Card
          sx={{
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: "15em",
            right: "24em",
            background: "white",
            borderRadius: "2rem",
            boxShadow: "none",
            width: "70%",
            height: "70vh",
            paddingLeft: "6em",
          }}
        >
          <Box className="login__container-left">
            <Typography
              variant="h2"
              sx={{
                fontSize: "3.125rem",
                fontWeight: 700,
                letterSpacing: "0.5px",
                lineHeight: "40px",
                marginBottom: "1em",
              }}
            >
              Welcome back to Contra 👋
            </Typography>
            <Box className="login__container-left--input-cont">
              <Typography
                sx={{
                  position: "absolute",
                  top: ".9rem",
                  left: "1.45rem",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  lineHeight: 1.333,
                  color: "rgb(103, 112, 132)",
                }}
              >
                Email address
              </Typography>
              <input type="text" placeholder="name@email.com" required />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  padding: ".8rem 1.4rem",
                  backgroundColor: "black",
                  border: "none",
                  color: "white",
                  borderRadius: "2.5rem",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                Log In
              </Button>
            </Box>
          </Box>
          <Box className="login__container-right">
            <Box
              component="img"
              sx={{
                width: "90%",
              }}
              src="https://contra.com/static/assets/login@2x.b44e5924.webp"
              alt="Contra star house"
            />
          </Box>
        </Card>

        <Box className="signup__container">
          <Typography
            variant="h5"
            sx={{
              color: "grey.dark",
              maxWidth: "480px",
              textAlign: "center",
              fontWeight: "400",
              fontSize: "1.7rem",
              letterSpacing: ".15px",
              lineHeight: " 1.42",
            }}
          >
            New to Contra? Join our commision-free platform
          </Typography>
          <Button
            variant="contained"
            sx={{
              padding: "1rem 1.3rem",
              backgroundColor: "transparent",
              border: "1px solid black",
              color: "black",
              borderRadius: "2.5rem",
              fontWeight: "600",
              fontSize: "1.2rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "transparent",
                color: "white",
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
