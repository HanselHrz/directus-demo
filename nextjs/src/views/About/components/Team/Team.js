import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const Team = ({ data }) => {
  const theme = useTheme();

  if (!data) {
    return null;
  }

  const title = data.title;
  const subtitle = data.subtitle;
  const description = data.description;
  const teamMembers = data.items;

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
      <Grid container spacing={2}>
        {teamMembers.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              width={1}
              height={1}
              component={Card}
              boxShadow={0}
              variant={'outlined'}
              bgcolor={'alternate.main'}
            >
              <CardContent sx={{ padding: 3 }}>
                <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                  <ListItemAvatar sx={{ marginRight: 3 }}>
                    <Avatar
                      src={item.images.data ? `http://localhost:1337${item.images.data[0].attributes.url}` : ''}
                      variant={'rounded'}
                      sx={{ width: 100, height: 100, borderRadius: 2 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ margin: 0 }}
                    primary={item.title}
                    secondary={item.subtitle}
                    primaryTypographyProps={{ variant: 'h6', fontWeight: 700 }}
                    secondaryTypographyProps={{ variant: 'subtitle1' }}
                  />
                </ListItem>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Team.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        images: PropTypes.shape({
          data: PropTypes.arrayOf(
            PropTypes.shape({
              attributes: PropTypes.shape({
                url: PropTypes.string.isRequired,
              }).isRequired,
            })
          ),
        }),
      })
    ),
  }).isRequired,
};

export default Team;
