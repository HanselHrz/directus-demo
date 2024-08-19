import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { getCustomersData } from 'services/strapi';
import { Contact, Headline, Partners, Stories } from './components';

function pageRender(data) {
  const theme = useTheme();
  switch (data.__component) {
    case 'customers.titular':
      return<Box
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
        marginTop: -13,
        paddingTop: 13,
        marginBottom: 13,
      }}
    >
      <Container zIndex={3} position={'relative'}>
        <Container marginLeft={'0 !important'}>
          <Headline data = {data}/>
        </Container>
      </Container>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        width={1}
        marginBottom={-1}
        position={'relative'}
        zIndex={2}
      >
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>;
    case "web-basic.socios-iconos":
      return       <Box position={'relative'} zIndex={3} marginTop={{ xs: 0, md: -22 }}>
      <Container>
        <Partners data = {data} />
      </Container>
    </Box>
    case "customers.relatos":
      return <Container>
                <Stories data={data} />
              </Container>;
    case "customers.contacto":
      return <Box bgcolor={theme.palette.alternate.main}>
      <Container>
        <Contact data ={data} />
      </Container>
    </Box>
    default:
      return null;
  }
}

const Customers = () => {
  const theme = useTheme();
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const response = await getCustomersData();
        if (mounted) {
          setData(response.PageContent);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

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

export default Customers;
