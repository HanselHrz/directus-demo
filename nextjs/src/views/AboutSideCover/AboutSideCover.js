import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { getAboutStartupData } from 'services/strapi';
import { Gallery, Headline, Numbers, Story, Team } from './components';

function pageRender(data) {
  switch (data.__component) {
    case 'about-side.header':
      return <Headline data={data} />;
    case 'about-side.gallery':
      return <Container paddingY={'0 !important'}><Gallery data={data} /></Container>; 
    case 'about-side.numeros':
      return <Container maxWidth={'800px !important'}>
      <Numbers data = {data} />
      <Container maxWidth={'800px !important'}>
          <Divider />
        </Container>
    </Container>;
    case 'about-side.story':
      return <Container>
      <Story data = {data}/>
      <Container maxWidth={'800px !important'}>
          <Divider />
        </Container>
    </Container>;
    case 'about-side.equipo':
      return <Container>
      <Team data = {data}/>
    </Container>;
    default:
      return null;
  }
}

const AboutSideCover = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const response = await getAboutStartupData();
        console.log(response);
        if (mounted) {
          setData(response.PageContent);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  } , []);

  return (
    <Main>
      <Box>
        {data ? data.map((item, index) => (
          <div key={index}>
            {pageRender(item)}
          </div>
        )) : null}
      </Box>
    </Main>
  );
};

export default AboutSideCover;
