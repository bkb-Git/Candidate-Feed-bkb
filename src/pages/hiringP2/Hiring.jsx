import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import LogoContra from "../../assets/LogoContra";
import blur from "../../assets/blur_bg_3.jpg";
import SkillBox from "../../components/SkillBox";
import DesignLogo from "../../assets/LogoSkills/DesignLogo";
import EngineeringLogo from "../../assets/LogoSkills/EngineeringLogo";
import MarketingLogo from "../../assets/LogoSkills/MarketingLogo";
import MusicAudioLogo from "../../assets/LogoSkills/MusicAudioLogo";
import SocialMediaLogo from "../../assets/LogoSkills/SocialMediaLogo";
import VideoAnimation from "../../assets/LogoSkills/VideoAnimation";
import WritingLogo from "../../assets/LogoSkills/WritingLogo";
import { useNavigate } from "react-router-dom";

const Hiring = () => {
  const navigate = useNavigate();
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
          <Button
            onClick={() => navigate("/sign-up")}
            disableRipple
            sx={{
              position: "absolute",
              top: "3em",
              left: "3em",
              fontWeight: 600,
              color: "rgb(155, 162, 176)",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            Previous Step
          </Button>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                position: "absolute",
                top: "2em",
                left: "5em",
                fontSize: "2.125rem",
                fontWeight: 700,
                letterSpacing: "-0.5px",
              }}
            >
              What type of skills are you looking to hire?
            </Typography>

            <Typography
              sx={{
                position: "absolute",
                top: "8em",
                left: "26em",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.5,
                color: "rgb(74, 82, 100)",
              }}
            >
              Select as many as you'd like.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "2em",
                marginTop: "8em",
              }}
            >
              <Box sx={{ display: "flex", gap: "2em" }}>
                <SkillBox skillName={"Design"} logo={<DesignLogo />} />
                <SkillBox
                  skillName={"Engineering"}
                  logo={<EngineeringLogo />}
                />
                <SkillBox skillName={"Marketing"} logo={<MarketingLogo />} />
                <SkillBox
                  skillName={"Music & Audio"}
                  logo={<MusicAudioLogo />}
                />
              </Box>
              <Box sx={{ display: "flex", gap: "2em" }}>
                <SkillBox
                  skillName={"Social Media"}
                  logo={<SocialMediaLogo />}
                />
                <SkillBox
                  skillName={"Video & Animation"}
                  logo={<VideoAnimation />}
                />
                <SkillBox skillName={"Writing"} logo={<WritingLogo />} />
              </Box>
              <Button
                variant="contained"
                sx={{
                  padding: ".6rem 1.7rem",
                  backgroundColor: "black",
                  border: "none",
                  color: "white",
                  borderRadius: "2.5rem",
                  fontWeight: "600",
                  fontSize: "1rem",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                Continue
              </Button>

              <Typography
                sx={{
                  position: "absolute",
                  bottom: "4em",
                  textAlign: "center",
                  fontSize: "0.75rem",
                  letterSpacing: "0.15px",
                  lineHeight: 1.333,
                  fontWeight: 400,
                  "&:hover": {
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}
              >
                Already have an account? Sign in here.
              </Typography>
            </Box>
          </Box>
        </Card>
        <Typography
          sx={{
            position: "absolute",
            bottom: "4em",
            color: "black",
            maxWidth: "100em",
            textAlign: "center",
          }}
        >
          By continuing, you agree to Contra's
          <Typography
            display={"inline"}
            sx={{
              borderBottom: "1px solid #000",
              paddingBottom: "3px",
              marginLeft: ".3em",
              cursor: "pointer",
            }}
          >
            Terms of Use
          </Typography>{" "}
          and confirm that you have read Contra's
          <Typography
            display={"inline"}
            sx={{
              borderBottom: "1px solid #000",
              paddingBottom: "3px",
              marginLeft: ".3em",
              cursor: "pointer",
            }}
          >
            Privacy Policy
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default Hiring;
