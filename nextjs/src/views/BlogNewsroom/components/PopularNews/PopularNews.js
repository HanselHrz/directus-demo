import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { getBlogs } from 'services/strapi';

const PopularNews = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    let isMounted = true;
    const fetchPosts = async () => {
      try {
        const data = await getBlogs();
        if (isMounted) {
          setPosts(data);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      isMounted = false; // desmontar el componente
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          The most popular news
        </Typography>
        <Typography
          variant="h6"
          color={'text.secondary'}
          align={'center'}
          data-aos={'fade-up'}
        >
          Keep up to date with what we're working on!
          <br />
          theFront is an ever evolving theme with regular updates.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {posts.slice(0, 2).map((item, i) => (
          <Grid key={i} item xs={12}>
            <Box
              component={Card}
              width={1}
              height={1}
              borderRadius={0}
              boxShadow={0}
              display={'flex'}
              flexDirection={{
                xs: 'column',
                md: i % 2 === 0 ? 'row-reverse' : 'row',
              }}
              sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: '50%' },
                }}
              >
                <Box
                  component={'img'}
                  loading="lazy"
                  height={1}
                  width={1}
                  src={`http://localhost:1337${item.attributes.image.data[0].attributes.url}`}
                  alt={item.attributes.image.data[0].attributes.name}
                  sx={{
                    objectFit: 'cover',
                    maxHeight: 360,
                    borderRadius: 2,
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
              </Box>
              <CardContent
                sx={{
                  paddingX: { xs: 1, sm: 2, md: 4 },
                  paddingY: { xs: 2, sm: 4 },
                  width: { xs: 1, md: '50%' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Box>
                  {item.attributes.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      component="a"
                      href=""
                      clickable
                      size={'small'}
                      color={'primary'}
                      sx={{ marginBottom: 1, marginRight: 1 }}
                    />
                  ))}
                </Box>
                <Typography
                  variant={'h6'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  {item.attributes.title}
                </Typography>
                <Box marginY={1}>
                  <Typography
                    variant={'caption'}
                    color={'text.secondary'}
                    component={'i'}
                  >
                    {item.attributes.author} - {item.attributes.publishedDate}
                  </Typography>
                </Box>
                <Typography color="text.secondary">
                  {item.attributes.description}
                </Typography>
                <Box marginTop={2} display={'flex'} justifyContent={'flex-end'}>
                  <Button
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
                    Read More
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularNews;
