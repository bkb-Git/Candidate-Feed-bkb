import React, { useState } from 'react';

// MaterialUI imports
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

// css imports
import './Independent.css';
import Portfolio from '../../assets/portfolio.webp';
import Paid from '../../assets/paid.webp';
import Opportunities from '../../assets/opportunities.webp';
import Discover from '../../assets/discover.webp';

const Independent = () => {

  const [activeBox, setActiveBox] = useState();

  // Custom Material UI styles
  // custom stylebox in selection area
  const StyledBox = styled(Box)(({ theme }) => ({ // link up theme later
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    border: '1px solid lightgray',
    borderRadius: '10px',
    height: '300px',
    width: '350px',
    padding: '12px',
    transition: '1s ease',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '1px 0px 14px 0px #AABBCC',  // rgba(229,231,235)  rgba(194,171,171,0.75) #AABBCC
      transform: 'scale(1.05)',
      transition: '.5s ease',
    },
    '&.clicked': {
      border: '2px solid rgba(194,171,171,0.80)',
      transform: 'scale(1.05)',
    }
  }));

  // fixed number of columns
  const gridContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    gap: '20px'
  }

  // span div inside StyleBox component
  const StyledSpan = styled(Box)(({ theme }) => ({ // link up theme later
    fontSize: '1rem',
    fontWeight: '400',
    color: 'rgb(74, 82, 100)',
  }));

  // title inside StyleBox component
  const StyledTitle = styled(Typography)(({ theme }) => ({ // link up theme later
    fontWeight: 'bold',
    marginBottom: '10px',
  }));

  // Button component
  const StyledButton = styled(Button)({
    backgroundColor: 'rgb(34,40,52)',
    color: 'white',
    borderRadius: '24px',
    paddingLeft: '24px',
    paddingRight: '24px',
    marginTop: '30px',
    height: '48px',
    minWidth: '100px',
    fontWeight: 'bold',
    '&:hover': {
      transition: 'all 150ms ease-out 0s',
      backgroundColor: 'rgb(55, 63, 81)'
    }
  })

  return (
    <div className='sign-up-independent'>
      <Box sx={{
        marginTop: '80px', // remove this line after adding header component
        bgcolor: 'rgba(255,255,255,0.86)',
        padding: '55px 180px',
        maxWidth: '1076px',
        borderRadius: '16px',
        position: 'relative',
        textAlign: 'center',
      }}>
        <Box sx={{ position: 'absolute', top: '40px', left: '40px', fontSize: '14px'}}>
          <Button variant='text' sx={{color: 'rgb(155, 162, 176)', fontWeight: '600'}}>Previous Step</Button>
        </Box>

        <Box sx={{ marginBottom: '40px'}}>
          <Typography variant='h4' sx={{marginBottom: '10px', fontWeight: 'bold'}}>What's your main goal?</Typography>
          <Typography>Don't worry. You'll still have access to all of Contra's features.</Typography>
        </Box>

        <Box sx={gridContainer}>
          <Box>
            <StyledBox 
              className={activeBox === 'portfolio' ? 'clicked' : ''} 
              onClick={() => setActiveBox('portfolio')}
            >
              <img src={Portfolio} alt="" />
              <StyledTitle variant='h5'>Build Portfolio</StyledTitle>
              <StyledSpan>Highlight past projects and supercharge your brand.</StyledSpan>
            </StyledBox>
          </Box>
          <Box>
            <StyledBox
              className={activeBox === 'discover' ? 'clicked' : ''} 
              onClick={() => setActiveBox('discover')}
            >
              <img src={Discover} alt="" />
              <StyledTitle variant='h5'>Get Discovered</StyledTitle>
              <StyledSpan>Make it easier for potential Clients to find you.</StyledSpan>
            </StyledBox>
          </Box>
          <Box>
            <StyledBox
              className={activeBox === 'opportunities' ? 'clicked' : ''} 
              onClick={() => setActiveBox('opportunities')}
            >
              <img src={Opportunities} alt="" />
              <StyledTitle variant='h5'>Find Opportunities</StyledTitle>
              <StyledSpan>Browse high-quality remote jobs, exclusively on Contra.</StyledSpan>
            </StyledBox>
          </Box>
          <Box>
            <StyledBox
              className={activeBox === 'paid' ? 'clicked' : ''} 
              onClick={() => setActiveBox('paid')}
            >
              <img src={Paid} alt="" />
              <StyledTitle variant='h5'>Get Paid Commission-Free</StyledTitle>
              <StyledSpan>Manage new or existing Clients in one place. You keep 100% of the profit.</StyledSpan>
            </StyledBox>
          </Box>
        </Box>

        {/* <Grid container rowSpacing={3} justifyContent="center" alignItems="center">
          <StyledGrid item xs={6} zeroMinWidth>
            <StyledBox>
              <img src={Portfolio} alt="" />
              <StyledTitle variant='h5'>Build Portfolio</StyledTitle>
              <StyledSpan>Highlight past projects and supercharge your brand.</StyledSpan>
            </StyledBox>
          </StyledGrid>
          <StyledGrid item xs={6} zeroMinWidth>
            <StyledBox>
              <img src={Discover} alt="" />
              <StyledTitle variant='h5'>Get Discovered</StyledTitle>
              <StyledSpan>Make it easier for potential Clients to find you.</StyledSpan>
            </StyledBox>
          </StyledGrid>
          <StyledGrid item xs={6} zeroMinWidth>
            <StyledBox>
              <img src={Opportunities} alt="" />
              <StyledTitle variant='h5'>Find Opportunities</StyledTitle>
              <StyledSpan>Browse high-quality remote jobs, exclusively on Contra.</StyledSpan>
            </StyledBox>
          </StyledGrid>
          <StyledGrid item xs={6} zeroMinWidth>
            <StyledBox>
              <img src={Paid} alt="" />
              <StyledTitle variant='h5'>Get Paid Commission-Free</StyledTitle>
              <StyledSpan>Manage new or existing Clients in one place. You keep 100% of the profit.</StyledSpan>
            </StyledBox>
          </StyledGrid>
        </Grid> */}

        <StyledButton disabled={false} variant="contained">
          Continue
        </StyledButton>

        <Box sx={{
          marginTop: '50px',
        }}>
          <Box component='span' sx={{ fontSize: '14px', color: 'rgb(74, 82, 100)', fontWeight: '500'}}>
            Already have an account? Sign in here
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Independent;