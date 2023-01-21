import { Box, Typography, Grid } from "@mui/material";

import "./SignUpCard.scss";

const SignUpCard = ({ title, subtitle, imageSource }) => {
  return (
    <Box className="SignUpCard">
      <Box className="SignUpCard__image" component="img" src={imageSource} />
      <Typography
        sx={{
          fontSize: "1rem",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          textAlign: "center",
          color: "#555",
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default SignUpCard;
