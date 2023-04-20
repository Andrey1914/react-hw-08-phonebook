import React from "react";
import useFormFields from "../../hooks/useFormFields";

import {
  useGetContactsQuery,
  useAddContactMutation,
} from "../../redux/contacts";

import { PersonAdd } from "@mui/icons-material";

import { Box, Button } from "@mui/material";
import { Input } from "../Input/InputStyled";

export default function FormAddContact() {
  const {
    state: name,
    setState: setName,
    handleChange: handleNameChange,
  } = useFormFields("");
  const {
    state: number,
    setState: setNumber,
    handleChange: handleNumberChange,
  } = useFormFields("");

  const [addContact, { isLoading }] = useAddContactMutation();
  const { data } = useGetContactsQuery("", {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const contactData = { name, number };
    const nameToAdd = contactData.name;

    if (data?.some((contact) => contact.name === nameToAdd)) {
      alert(`${nameToAdd} is already in your contacts`);
      return;
    }

    addContact(contactData);
    formReset();
  };

  const formReset = () => {
    setName("");
    setNumber("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
      }}
    >
      <Input
        type="text"
        label="Name"
        variant="outlined"
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
        variant="outlined"
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
          fontFamily: "Montserrat",
          color: "var(--text)",
          backgroundColor: "var(--btn-bg)",
          fontWeight: "700",
        }}
      >
        {isLoading ? "Addition..." : "Add contact"}
        <PersonAdd color="inherit" />
      </Button>
    </Box>
  );
}
