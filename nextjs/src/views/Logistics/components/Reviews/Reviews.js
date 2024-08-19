import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import PropTypes from 'prop-types';

const Reviews = ({ data }) => {
  if (!data || !data.comments) return null;

  const title = data.title;
  const description = data.description;
  const comments = data.comments;

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
            color: 'common.white',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          data-aos={'fade-up'}
          sx={{ color: 'common.white' }}
        >
          {description}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {comments.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              width={1}
              height={1}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
              component={Card}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              boxShadow={0}
              variant={'outlined'}
              borderRadius={2}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box sx={{ paddingBottom: 2 }}>
                  <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                    <ListItemAvatar sx={{ marginRight: 3 }}>
                      <Avatar
                        src={`http://localhost:1337${item.avatar.data.attributes.formats.small.url}`}
                        variant={'rounded'}
                        sx={{ width: 100, height: 100, borderRadius: 2 }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ margin: 0 }}
                      primary={item.userName}
                      secondary={item.state}
                    />
                  </ListItem>
                </Box>
                <Typography color="text.secondary">{item.description}</Typography>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Reviews.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        state: PropTypes.string,
        userName: PropTypes.string,
        avatar: PropTypes.shape({
          data: PropTypes.shape({
            attributes: PropTypes.shape({
              formats: PropTypes.shape({
                thumbnail: PropTypes.shape({
                  url: PropTypes.string,
                }),
              }),
            }),
          }),
        }),
      })
    ),
  }),
};

export default Reviews;
