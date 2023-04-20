import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/filter/filterActions';
import { useRemoveContactMutation } from '../../redux/contacts';
import {
  setOpenedContact,
  updateModalState,
} from '../../redux/modal/modalActions';

import { Edit, PersonRounded, Delete } from '@mui/icons-material';

import LoadingButton from '@mui/lab/LoadingButton';

import {
  Item,
  StyledBox,
  ListBtn,
  ContactInfo,
  IconBtn,
} from './ContactItemStyled';

export default function ContactItem({ contactData }) {
  const [updateContactsByRemove, { isLoading }] = useRemoveContactMutation();
  const dispatch = useDispatch();

  const onContactEdit = contact => {
    dispatch(setOpenedContact(contact));
    dispatch(updateModalState());
  };

  const onContactDelete = id => {
    updateContactsByRemove(id);
    dispatch(updateFilter(''));
  };

  return (
    <Item elevation={2}>
      <StyledBox>
        <PersonRounded />
        <ContactInfo>{contactData.name}</ContactInfo>
        <ContactInfo>{contactData.number}</ContactInfo>
      </StyledBox>

      <ListBtn>
        <IconBtn
          aria-label="edit"
          type="button"
          onClick={() => onContactEdit(contactData)}
        >
          <Edit />
        </IconBtn>

        {isLoading ? (
          <LoadingButton loading variant="outlined">
            Submit
          </LoadingButton>
        ) : (
          <IconBtn
            aria-label="delete"
            type="button"
            onClick={() => onContactDelete(contactData.id)}
          >
            <Delete />
          </IconBtn>
        )}
      </ListBtn>
    </Item>
  );
}

ContactItem.propTypes = {
  contactData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
