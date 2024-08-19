import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

const News = ({ data }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

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
      </Box>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={isMd ? 4 : 2} direction="column">
            {data.items.map((item, index) => (
              <Grid
                item
                xs={12}
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-offset={100}
                data-aos-duration={600}
              >
                <Box
                  component={Card}
                  display={'flex'}
                  flexDirection={{ xs: 'column', sm: 'row' }}
                >
                  {item.images && item.images.data && (
                    <CardMedia
                      title={item.title}
                      image={`http://localhost:1337${item.images.data[0].attributes.url}`}
                      sx={{
                        height: { xs: 240, sm: 'auto' },
                        width: { xs: 1, sm: 300 },
                      }}
                    />
                  )}
                  <CardContent>
                    <Box>
                      <Typography
                        variant="h6"
                        gutterBottom
                        color="text.primary"
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                    <CardActions sx={{ justifyContent: 'flex-end' }}>
                      <Button>Leer más</Button>
                    </CardActions>
                  </CardContent>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={isMd ? 4 : 2} direction="column">
            {data.alert.map((alert, index) => (
              <Grid item xs={12} data-aos="fade-up" key={index}>
                <Box component={Card} bgcolor={'primary.main'}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      color="text.primary"
                      sx={{ color: 'common.white' }}
                    >
                      {alert.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      sx={{ color: 'common.white' }}
                    >
                      {alert.description}
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
            ))}
            <Grid item xs={12} data-aos="fade-up">
              <Box component={Card}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="text.primary">
                    Sistema interactivo de soporte de decisiones
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </Box>
                    }
                  >
                    Ver todo
                  </Button>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

News.propTypes = {
  data: PropTypes.object.isRequired,
};

export default News;
