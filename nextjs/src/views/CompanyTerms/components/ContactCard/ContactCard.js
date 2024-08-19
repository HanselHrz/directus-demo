import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { getTerms } from '../../../../services/strapi';

const ContactCard = () => {
  const theme = useTheme();
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const data = await getTerms();
        setContactInfo(data.attributes.contactUs);
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    };

    fetchTerms();
  }, []);

  if (!contactInfo) {
    return null;
  }

  return (
    <Box
      component={Card}
      boxShadow={0}
      border={`1px solid ${theme.palette.divider}`}
    >
      <Box padding={{ xs: 2, sm: 3 }}>
        <Typography
          sx={{
            fontWeight: '700',
          }}
          gutterBottom
        >
          {contactInfo.question}
        </Typography>
        <Typography
          variant={'body2'}
          color={'text.secondary'}
          sx={{
            marginBottom: 2,
          }}
        >
          {contactInfo.paragraph}
        </Typography>
        <Typography variant={'subtitle2'}>
          {contactInfo.email}
          <br />
          {contactInfo.address.split(' ').slice(0, -2).join(' ')}
          <br />
          {contactInfo.address.split(' ').slice(-2).join(' ')}
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactCard;
