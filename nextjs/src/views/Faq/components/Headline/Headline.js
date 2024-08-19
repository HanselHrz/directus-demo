import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = ({ data }) => {
  if (!data) return null;
  
  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'textSecondary'}
        align={'center'}
      >
        {data.subtitle}
      </Typography>
      <Typography variant="h2" align={'center'} fontWeight={700} gutterBottom>
        {data.title}
      </Typography>
      <Typography variant="h6" align={'center'} color={'textSecondary'}>
        {data.description}
      </Typography>
    </Box>
  );
};

Headline.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Headline;
