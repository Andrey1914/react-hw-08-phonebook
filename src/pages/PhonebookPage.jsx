import Section from "../components/Section/Section";
import FormAddContact from "../components/ContactForm/ContactForm";
import ContactsList from "../components/ContactList/ContactList";
import FilterInput from "../components/Filter/Filter";
import { useGetContactsQuery } from "../redux/contacts";
import Loader from "../components/Loader/Loader";
import { StyledBox } from "./PhonebookPageStyled";

export default function PhonebookPage() {
  const { isFetching } = useGetContactsQuery();

  return (
    <>
      <StyledBox>
        <Section title="Add new contact." isHidden={false}>
          <FormAddContact />
        </Section>

        <Section title="Your contacts." isHidden={false}>
          {isFetching ? <Loader /> : <FilterInput />}

          <ContactsList />
        </Section>
      </StyledBox>
    </>
  );
}
