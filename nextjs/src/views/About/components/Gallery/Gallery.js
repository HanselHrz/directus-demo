import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Gallery = ({ data }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  if (!data || !data.video || !data.video.data) {
    return null;
  }

  const title = data.title;
  const subtitle = data.subtitle;
  const description = data.description;
  const videos = data.video.data;

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 700,
          }}
          gutterBottom
          color={'text.secondary'}
          align={'center'}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          {title}
        </Typography>
        <Typography variant="h6" align={'center'} color={'text.secondary'}>
          {description}
        </Typography>
      </Box>
      <Box>
        <ImageList
          variant="quilted"
          cols={4}
          rowHeight={isMd ? 300 : 220}
          gap={isMd ? 16 : 8}
        >
          {videos.map((video, i) => (
            <ImageListItem
              key={i}
              cols={isMd ? 1 : 2}
              rows={isMd ? 1 : 1}
            >
              <img
                height={'100%'}
                width={'100%'}
                src={`http://localhost:1337${video.attributes.formats.small.url}`}
                alt={video.attributes.name}
                loading="lazy"
                style={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                  cursor: 'pointer',
                  borderRadius: 8,
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

Gallery.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    video: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          attributes: PropTypes.shape({
            name: PropTypes.string.isRequired,
            formats: PropTypes.shape({
              small: PropTypes.shape({
                url: PropTypes.string.isRequired,
              }).isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Gallery;
