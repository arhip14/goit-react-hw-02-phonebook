import React, { useState } from 'react';
import '../index.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
