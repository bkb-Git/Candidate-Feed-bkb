import { Button } from "@mui/material";
import "./PrimaryButton.scss";

const PrimaryButton = ({ title, onClick }) => {
  return (
    <Button
      sx={{
        borderRadius: "20px",
        color: "#000",
        padding: "5px",
        width: "100px",
        textTransform: "capitalize",
        fontSize: "16px",
        fontWeight: "600",
        "&:hover": {
          backgroundColor: "#000",
          color: "#fff",
        },
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default PrimaryButton;
