/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutBottom = ({ data }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const title = data?.title || 'Monitorea y analiza los patrones de uso.';
  const description = data?.description || 'Mantén un registro de lo que sucede con tus datos, cambia permisos y ejecuta informes sobre tus datos en cualquier lugar del mundo.';

  const defaultImageUrl = 'https://assets.maccarianagency.com/backgrounds/img51.png';
  const imageUrlFromData = data?.items?.[0]?.images?.data?.[0]?.attributes?.url;
  const imageUrl = imageUrlFromData ? `http://localhost:1337${imageUrlFromData}` : defaultImageUrl;

  return (
    <Box>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item container justifyContent={'center'} xs={12} md={6}>
          <Box
            component={'img'}
            loading="lazy"
            src={imageUrl}
            width={1}
            height={1}
            maxWidth={400}
          />
        </Grid>
        <Grid item container alignItems="center" xs={12} md={6}>
          <Box>
            <Typography
              variant="h4"
              data-aos={'fade-up'}
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              {title}
            </Typography>
            <Typography data-aos={'fade-up'}>
              {description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

AboutBottom.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        images: PropTypes.shape({
          data: PropTypes.arrayOf(
            PropTypes.shape({
              attributes: PropTypes.shape({
                url: PropTypes.string,
              }),
            }),
          ),
        }),
      }),
    ),
  }),
};

export default AboutBottom;
