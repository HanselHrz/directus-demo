import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const mockLogos = [
  'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
  'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
  'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
  'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
  'https://assets.maccarianagency.com/svg/logos/google-original.svg',
  'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
];

const Partners = ({ data }) => {
  const theme = useTheme();

  if (!data) {
    return null;
  }

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              {data.title}
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              {data.subtitle}
            </Typography>
            {data.description && (
              <Typography component={'p'}>
                {data.description}
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" flexWrap="wrap" justifyContent={'flex-start'}>
            {mockLogos.map((item, i) => (
              <Box maxWidth={90} marginTop={2} marginRight={4} key={i}>
                <Box
                  component="img"
                  height={1}
                  width={1}
                  src={item}
                  alt={`Logo ${i + 1}`}
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0) invert(0.7)'
                        : 'none',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

Partners.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        url: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default Partners;
