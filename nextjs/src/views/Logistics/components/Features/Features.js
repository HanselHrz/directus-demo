/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Features = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700 }}
        >
          {data.title}
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
        >
          {data.subtitle}
        </Typography>
        <Box marginTop={3} display={'flex'} justifyContent={'center'}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={
              <svg
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
          >
            Comenzar busqueda
          </Button>
        </Box>
      </Box>
      <Box>
        <Grid container spacing={4}>
          {data.items.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                data-aos={'fade-up'}
                data-aos-delay={i * 100}
                data-aos-offset={100}
                data-aos-duration={600}
                height={1}
              >
                <Box
                  component={Card}
                  variant={'outlined'}
                  height={1}
                  padding={3}
                  sx={{
                    transition: 'all .2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 2,
                    },
                  }}
                >
                  <CardContent>
                    <Box>
                      <Box marginBottom={2} color={'secondary.main'}>
                        {/* Puedes reemplazar esto con un ícono adecuado si lo tienes */}
                        <svg
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </Box>
                      <Typography
                        variant={'h5'}
                        gutterBottom
                        sx={{ fontWeight: 700 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

Features.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      })
    ),
  }),
};

export default Features;
