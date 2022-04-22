import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ContactForm } from './AddingContactForm/AddingContactForm';
import { Title, Container } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/ContactFilter';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const contactAntiDuplicator = name => {
    const normalizedName = name.toLowerCase();
    return contacts.some(
      contactName => normalizedName === contactName.name.toLowerCase()
    );
  };

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    if (contactAntiDuplicator(newContact.name)) {
      window.alert(`${newContact.name} is already in contacts`);
      return;
    } else {
      setContacts(prevState => [newContact, ...prevState]);
    }
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(data => data.id !== contactId));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(data =>
    data.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <Title>Contacts</Title>
      <Filter filterValue={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </Container>
  );
};

ContactList.propTypes = { contacts: PropTypes.array };
