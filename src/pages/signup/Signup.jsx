import React, { useEffect } from 'react';

// MaterialUI imports
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';

// css imports
import './Signup.css';
import independentImg from "../../assets/independent.webp";
import hiringImg from "../../assets/hiring.webp";

const Signup = ({ title }) => {

  useEffect(() => document.title = title, [title])

  const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    border: '1px solid lightgray',
    borderRadius: '10px',
    height: '400px',
    width: '400px',
    padding: '12px',
    transition: '1s ease',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '1px 0px 14px 0px rgba(194,171,171,0.75)',
      transform: 'scale(1.1)',
      transition: '.5s ease',
    }
  }));

  const StyledSpan = styled(Box)(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: '400',
    color: 'rgb(74, 82, 100)',
  }))

  return (
    <div className="sign-up">
      <Box 
        sx={{
          marginTop: '80px', // remove this line after adding header component
          bgcolor: 'rgba(255,255,255,0.86)',
          padding: 12,
          borderRadius: '16px',
          position: 'relative',
          textAlign: 'center'
        }}
      >
        <Box sx={{
          marginBottom: '50px',
        }}>
          <Typography variant='h4' sx={{marginBottom: '10px', fontWeight: 'bold'}}>
            Let's personalize your experience!
          </Typography>
          <Typography>
            What brings you to Contra?
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px'
        }}>
          <StyledBox>
            <img src={independentImg} alt="" />
            <Typography variant='h6' sx={{ fontWeight: 'bold', marginBottom: '10px'}}>I'm an Independent</Typography>
            <StyledSpan>Find work and manage your freelance business</StyledSpan>
          </StyledBox>
          <Box>
            <Typography>OR</Typography>
          </Box>
          <StyledBox>
            <img src={hiringImg} alt="" />
            <Typography variant='h6' sx={{ fontWeight: 'bold', marginBottom: '10px'}}>I'm Hiring</Typography>
            <StyledSpan>Post opportunities and manage hiring</StyledSpan>
          </StyledBox>
        </Box>

        {/* Material UI Grid view not consistent, look for solutions */}
        {/* <Grid container sx={{ alignItems: 'center'}}>
          <Grid item xs={5}>
            <StyledBox>
              <img src={independentImg} alt="" />
              <Typography>I'm an Independent</Typography>
              <Typography>Find work and manage your freelance business</Typography>
            </StyledBox>
          </Grid>
          <Grid item xs={2}>
            <Typography>OR</Typography>
          </Grid>
          <Grid item xs={5}>
            <StyledBox>
              <img src={hiringImg} alt="" />
              <Typography>I'm Hiring</Typography>
              <Typography>Post opportunities and manage hiring</Typography>
            </StyledBox>
          </Grid>
        </Grid> */}

        <Box sx={{
          position: 'absolute',
          bottom: '30px',
          left: '40%'
        }}>
          <Box component='span' sx={{ fontSize: '14px', color: 'rgb(74, 82, 100)', fontWeight: '500'}}>
            Already have an account? Sign in here
          </Box>
        </Box>
      </Box>

      <Box sx={{ 
        bottom: '20px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40px',
        maxWidth: '100%',
        fontSize: '14px',
        color: 'rgb(155, 162, 176)',
        }}>
        <Typography>
          By continuing, you agree to Contra's Terms of Use and confirm that
        </Typography>
        <Typography>
          you have read Contra's Privacy Policy
        </Typography>
      </Box>
    </div>
  )
}

export default Signup;




// old solution without using Material UI
// const Signup = ({ title }) => {

//   // useEffect(() => document.title = title, [title])

//   return (
//     <div className="sign-up">
//       <div className="container">
//         <div className="sign-up--title">
//           <h1>Let's personalize your experience!</h1>
//           <span>What brings you to Contra?</span>
//         </div>

//         <div className="container2">
//           <div className="independent">
//             <img src={independentImg} alt="" />
//             <h2>I'm an Independent</h2>
//             <span>Find work and manage your freelane business</span>
//           </div>
//           <span>OR</span>
//           <div className="hiring">
//             <img src={hiringImg} alt="" />
//             <h2>I'm Hiring</h2>
//             <span>Post opportunities and manage hiring</span>
//           </div>
//         </div>

//         <div className="bottom">
//           <span>Already have an account? Sign in here</span>
//         </div>
//       </div>

//       <span>
//         By continuing, you agree to Contra's Terms of Use and confirm that you have read Contra's Privacy Policy
//       </span>
//     </div>
//   )
// }

// export default Signup;