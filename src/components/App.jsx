import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import '../index.css';
import {
  AppContainer,
  Title,
  FilterWrapper,
  FilterInput,
} from './AppStyled';
function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleDeleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <AppContainer>
      <Title>Phonebook</Title>
      <ContactForm addContact={handleAddContact} contacts={contacts} />
      <h2>Contacts</h2>
      <FilterWrapper>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        {contacts.length > 0 && (
          <FilterInput type="text" value={filter} onChange={handleFilterChange} />
        )}
      </FilterWrapper>
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </AppContainer>
  );
}

export default App;
