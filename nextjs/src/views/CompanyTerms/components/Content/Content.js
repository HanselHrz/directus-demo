import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { getTerms } from '../../../../services/strapi';

const PrivacySection = ({ title, description }) => {
  return (
    <Box>
      <Typography
        variant={'h6'}
        gutterBottom
        sx={{
          fontWeight: 'medium',
        }}
      >
        {title}
      </Typography>
      <Typography component={'p'} color={'text.secondary'}>
        {description}
      </Typography>
    </Box>
  );
};

PrivacySection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const terms = await getTerms();
        const questions = terms.attributes.questions.data;
        const formattedData = questions.map(item => ({
          title: item.attributes.question,
          description: item.attributes.answer
            .map(paragraph =>
              paragraph.children.map(child => child.text).join(' ')
            )
            .join('\n\n'),
        }));
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>
      {data.map((item, i) => (
        <Box key={i} marginBottom={i < data.length - 1 ? 4 : 0}>
          <PrivacySection {...item} />
        </Box>
      ))}
    </Box>
  );
};

export default Content;
