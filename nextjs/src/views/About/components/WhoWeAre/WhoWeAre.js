/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const WhoWeAre = ({ items = [] }) => { 
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        {items.map(item => (
          <Grid
            key={item.id}
            item
            container
            alignItems={'center'}
            justifyContent="center"
            xs={12}
            md={6}
          >
            <Box>
              <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
                {item.title}
              </Typography>
              <Typography component={'p'} color={'text.secondary'}>
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

WhoWeAre.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default WhoWeAre;
