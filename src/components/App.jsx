import React, { Component } from "react";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'; 
import {ContactForm } from './AddingContactForm/AddingContactForm';
import {Title, Container} from './App.styled';
import {ContactList} from './ContactList/ContactList';
import {Filter } from './Filter/ContactFilter';

const CONTACTS_LOCAL_STORAGE="Phone book";

export class App extends Component{
  

  state = {
    contacts: 
      [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
    filter: '',
  }

  contactAntiDuplicator = (name) => {
    const normalizedName=name.toLowerCase();
    return this.state.contacts.some
        (contactName => normalizedName===contactName.name.toLowerCase());

  };

  addContact = ({name,number}) => {
    const newContact={
      id:nanoid(),
      name: name,
      number: number};
    if (this.contactAntiDuplicator(newContact.name)) {
      window.alert(`${newContact.name} is already in contacts`);
      return;
    } else {
      this.setState(prevState => ({ contacts:[newContact, ...prevState.contacts]}));} 
  };

  deleteContact = (contactId) => {
    this.setState(prevState =>({
      contacts: prevState.contacts.filter(data => data.id !==contactId),
    }));
  };

  changeFilter = (event) => {
    this.setState({filter: event.currentTarget.value});
};

componentDidMount(){
  const dataFromStorage=localStorage.getItem(CONTACTS_LOCAL_STORAGE);
  const contactsFromStorage=JSON.parse(dataFromStorage);
  if(contactsFromStorage){
    this.setState({contacts:contactsFromStorage});
  };
  
};

componentDidUpdate (_,prevState) {
  if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(CONTACTS_LOCAL_STORAGE, JSON.stringify(this.state.contacts));
  }
};

  render(){
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(
      data => data.name.toLowerCase().includes(normalizedFilter)
   );

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm 
            onSubmit={this.addContact}
        />
        <Title>Contacts</Title>
        <Filter 
          filterValue={this.state.filter}
          onChange={this.changeFilter}
        />
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
      </Container>
    );
  };
  
    
};



ContactList.propTypes={contacts:PropTypes.array};