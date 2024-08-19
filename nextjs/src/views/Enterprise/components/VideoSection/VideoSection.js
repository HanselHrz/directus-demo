import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const VideoSection = (data) => {
  const info = data.data;
  const { video } = info;
  const videoUrl = video.url.includes('/uploads/')
  ? `http://localhost:1337${video.url}`
  : video.url;
  console.log('video', videoUrl)
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          width: 1,
          height: 1,
          zIndex: 3,
          background: theme.palette.primary.main,
          opacity: 0.2,
        },
      }}
    >
      <Box
        component={'video'}
        width={1}
        autoPlay={true}
        muted={true}
        loop={true}
      >
        <source
          src={videoUrl}
          type="video/mp4"
        />
        <source
          src={videoUrl}
          type="video/webm"
        />
        <source
          src={videoUrl}
          type="video/ogg"
        />
        Your browser do not support HTML5 video.
      </Box>
    </Box>
  );
};

export default VideoSection;
