import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

import { StyledAppContainer, Title } from './phonebook.styled';

const LOCALSTORAGE_KEY_CONTACTS = 'contacts';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(LOCALSTORAGE_KEY_CONTACTS);
    if (savedContacts !== null) {
      const pasredContacts = JSON.parse(savedContacts);
      this.setState({ contacts: pasredContacts });
      return;
    }
    this.setState({ contacts: initialContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const contactsStringify = JSON.stringify(this.state.contacts);
      localStorage.setItem(LOCALSTORAGE_KEY_CONTACTS, contactsStringify);
    }
  }

  addContact = (newContact, actions) => {
    const isAddedBefore = this.checkContactIsAdded(newContact);
    if (isAddedBefore) {
      alert('contact be already added before');
      return;
    }

    const contactDataObj = { id: nanoid(3), ...newContact };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contactDataObj] };
    });
    actions.resetForm();
  };

  checkContactIsAdded = newContact => {
    const nameContact = newContact.name.trim().toUpperCase();
    const findContact = this.state.contacts.find(
      ({ name }) => name.trim().toUpperCase() === nameContact
    );
    if (findContact) {
      return true;
    } else return false;
  };

  addFilter = e => {
    const nameFilter = e.target.value;
    this.setState({ filter: nameFilter });
  };

  filteredContacts = () => {
    const filterToUpper = this.state.filter.toUpperCase();

    return this.state.contacts.filter(({ name }) =>
      name.toUpperCase().includes(filterToUpper)
    );
  };

  delContact = idx => {
    const newContacts = this.state.contacts.reduce(
      (acc, contact, index) => (index === idx ? acc : [...acc, contact]),
      []
    );
    this.setState({ contacts: [...newContacts] });
  };

  render() {
    const filtered = this.filteredContacts();

    return (
      <StyledAppContainer>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.addContact} />

        <Title>Contacts</Title>
        <Filter filter={this.addFilter} />
        <ContactList contacts={filtered} onDelete={this.delContact} />
      </StyledAppContainer>
    );
  }
}
