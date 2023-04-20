import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { filterSelector } from '../../redux/filter/filterSelectors';
import { updateFilter } from '../../redux/filter/filterActions';
import { useGetContactsQuery } from '../../redux/contacts';

import ContactItem from '../ContactItem/ContactItem';

import { Box } from '@mui/material';

export default function ContactsList() {
  const { data } = useGetContactsQuery('', {
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);

  const filterContacts = () => {
    const normalizedString = filter?.toLowerCase();

    return filter
      ? data?.filter(contact =>
          contact.name.toLowerCase().includes(normalizedString)
        )
      : data;
  };

  const filteredContacts = filterContacts();

  useEffect(() => {
    if (data?.length === 0) {
      dispatch(updateFilter(''));
    }
  }, [data, dispatch]);

  return (
    <Box
      component="ul"
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 2 }}
    >
      {filteredContacts?.map(filteredContact => (
        <ContactItem key={filteredContact.id} contactData={filteredContact} />
      ))}
    </Box>
  );
}
