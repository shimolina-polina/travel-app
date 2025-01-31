import React from 'react';
import { Box, Typography } from '@mui/material';
import SvgImage from '../molecules/SvgImage';

const AboutPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '20px',
        width: '100%',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          maxWidth: '1000px',
          width: '100%', 
        }}
      >
        <SvgImage  />

        <Typography
          sx={{
            position: 'absolute',
            left: '16px',
            bottom: '30px',
            width: '410px',
            lineHeight: 1.1,
            fontSize: { xs: '24px', sm: '60px' },
            textAlign: 'left',
            padding: 1,
          }}
        >
          Путешествуй в будущее!
        </Typography>

      </Box>
    </Box>
  );
};

export default AboutPage;