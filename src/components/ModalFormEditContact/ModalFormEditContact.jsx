import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import {
  updateModalState,
  resetOpenedContact,
} from "../../redux/modal/modalActions";
import { isModalShownSelector } from "../../redux/modal/modalSelectors";
import { useEditContactMutation } from "../../redux/contacts";

import useFormFields from "../../hooks/useFormFields";

import { Close, PersonAdd } from "@mui/icons-material";

import { Box, Button } from "@mui/material";

import {
  Overlay,
  Modal,
  Title,
  CloseButton,
} from "./ModalFormEditContactStyled";
import { Input } from "../Input/InputStyled";

export default function ModalFormEditContact({ openedContact }) {
  const [editContact, { isLoading }] = useEditContactMutation();
  const {
    state: name,
    // eslint-disable-next-line no-unused-vars
    setState: setName,
    handleChange: handleNameChange,
  } = useFormFields(openedContact.name);
  const {
    state: number,
    // eslint-disable-next-line no-unused-vars
    setState: setNumber,
    handleChange: handleNumberChange,
  } = useFormFields(openedContact.number);
  const dispatch = useDispatch();
  const isModalShown = useSelector(isModalShownSelector);

  const handleEditSubmit = (evt) => {
    evt.preventDefault();
    const contactData = {
      name,
      number,
    };

    editContact({ id: openedContact.id, contact: contactData })
      .then(() => dispatch(updateModalState()))
      .then(() => dispatch(resetOpenedContact()));
  };

  const onBackdropClose = useCallback(
    (evt) => {
      if (evt.target === evt.currentTarget) {
        dispatch(updateModalState());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        dispatch(updateModalState());
      }
    };

    if (isModalShown) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.classList.add("modal-is-open");
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-is-open");
    };
  }, [dispatch, isModalShown]);

  return createPortal(
    <Overlay onClick={onBackdropClose}>
      <Modal>
        <CloseButton
          aria-label="close modal button"
          onClick={() => dispatch(updateModalState())}
        >
          <Close />
        </CloseButton>

        <Title variant="h1">Edit your contact:</Title>
        <Box
          component="form"
          onSubmit={handleEditSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Input
            type="text"
            label="name"
            value={name}
            onChange={handleNameChange}
            maxLength={30}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <Input
            type="tel"
            label="number"
            value={number}
            maxLength={17}
            onChange={handleNumberChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits, contain spaces, dashes, parentheses and start with +"
            required
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              gap: 1,
              p: 2,
              fontFamily: "Montserrat",
              color: "var(--text)",
              backgroundColor: "var(--btn-bg)",
              fontWeight: "700",
            }}
          >
            {isLoading ? "Saving..." : "Save contact"}
            <PersonAdd />
          </Button>
        </Box>
      </Modal>
    </Overlay>,
    document.body
  );
}
ModalFormEditContact.propTypes = {
  openedContact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
