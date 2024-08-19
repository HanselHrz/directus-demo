import React, { useEffect, useState } from 'react';
import { getFaqData } from '../../services/strapi';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Content, Footer, Headline } from './components';

const Faq = () => {
  const theme = useTheme();
  const [faqData, setFaqData] = useState(null);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const data = await getFaqData();
        setFaqData(data);
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      }
    };

    fetchFaqData();
  }, []);

  if (!faqData) {
    return <div>Loading...</div>;
  }

  const heroSection = faqData.find(section => section.section_name === 'hero');
  const accordionSections = faqData.filter(section => section.section_name.startsWith('accordion'));
  const questionSection = faqData.find(section => section.section_name === 'question');

  return (
    <Main>
      <Box>
        <Box
          sx={{
            backgroundColor: theme.palette.alternate.main,
            backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
            marginTop: -13,
            paddingTop: 13,
          }}
        >
          <Container>
            <Headline data={heroSection} />
          </Container>
        </Box>
        <Container maxWidth={800}>
          <Content data={accordionSections} />
        </Container>
        <Box bgcolor={theme.palette.alternate.main}>
          <Container>
            <Footer data={questionSection} />
          </Container>
        </Box>
      </Box>
    </Main>
  );
};

export default Faq;
