import { Grid, Link } from "@mui/material";
import SignUpContainerLayout from "../../layouts/SignUpContainerLayout";
import SignUpCard from "../../components/SignUpCard/SignUpCard";
import PrimaryButton from "../../components/PrimaryButton";
import "./Hiring.scss";
const Hiring = () => {
  return (
    <SignUpContainerLayout
      title="What are your main goals?"
      subtitle="Select as many as you’d like. You'll still have access to all of Contra's features."
    >
      <Grid container justifyContent="space-between">
        <SignUpCard
          title="Hire Freelancers"
          subtitle="Post a job for free and match with perfect freelancers"
          imageSource="https://contra.com/static/assets/HireFreelancers.ce19f11e.webp"
        />
        <SignUpCard
          title="Hire Freelancers"
          subtitle="Post a job for free and match with perfect freelancers"
          imageSource="https://contra.com/static/assets/HireFreelancers.ce19f11e.webp"
        />
        <SignUpCard
          title="Hire Freelancers"
          subtitle="Post a job for free and match with perfect freelancers"
          imageSource="https://contra.com/static/assets/HireFreelancers.ce19f11e.webp"
        />
      </Grid>
      <Grid
        container
        xs={12}
        justifyContent="center"
        sx={{
          marginTop: "20px",
        }}
      >
        <PrimaryButton title={"Continue"} />
      </Grid>
      <Grid
        container
        justifyContent="center"
        sx={{
          marginTop: "15px",
        }}
      >
        <Link component="button" underline="hover" color="#000">
          Already have an account? Sign in here.
        </Link>
      </Grid>
    </SignUpContainerLayout>
  );
};

export default Hiring;
