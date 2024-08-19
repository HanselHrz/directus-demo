import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Contact,
  Gallery,
  Hero,
  Partners,
  Story,
  Team,
} from './components';
import { getAboutData } from '../../services/strapi';  

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAboutData();
        setData(result.attributes.section);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const heroData = data.find(section => section.section_name === 'hero');
  const storyData = data.find(section => section.section_name === 'story');
  const teamData = data.find(section => section.section_name === 'team');
  const partnersData = data.find(section => section.section_name === 'partners');
  const contactData = data.find(section => section.section_name === 'contact');
  const galleryData = data.find(section => section.section_name === 'gallery');
  // Puedes añadir más secciones aquí según sea necesario

  return (
    <Main colorInvert={true}>
      <Hero data={heroData} />
      <Container>
        <Story data={storyData} />
      </Container>
      <Container>
        <Team data={teamData} />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Partners data={partnersData} />
        </Container>
      </Box>
      <Contact data={contactData} />
      <Container>
        <Gallery data={galleryData} />
      </Container>
    </Main>
  );
};

export default About;
