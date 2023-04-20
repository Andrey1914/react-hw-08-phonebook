import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateFilter } from "../../redux/filter/filterActions";
import { filterSelector } from "../../redux/filter/filterSelectors";
import { useGetContactsQuery } from "../../redux/contacts";

import { Input } from "../Input/InputStyled";
import { Typography } from "@mui/material";

export default function FilterInput() {
  const { data } = useGetContactsQuery("", {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const onInputFind = (evt) => {
    const stringForFilter = evt.target.value;
    dispatch(updateFilter(stringForFilter));
  };

  return (
    <>
      {data?.length ? (
        <Input
          type="text"
          name="filter"
          label="Find contact by name"
          fullWidth={true}
          value={filter}
          autoFocus={true}
          onChange={onInputFind}
        />
      ) : (
        <Typography
          variant="p"
          fontFamily="Montserrat"
          fontSize="1rem"
          color="var(--text)"
        >
          You haven't added any contact yet...
        </Typography>
      )}
    </>
  );
}
