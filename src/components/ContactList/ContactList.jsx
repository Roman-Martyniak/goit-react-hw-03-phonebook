import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

const ContactList = props => {
  const { contacts, filterValue, OnContactDelete } = props;

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <ContactItem
            name={name}
            number={number}
            id={id}
            key={id}
            OnContactDelete={OnContactDelete}
          />
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterValue: PropTypes.string.isRequired,
  OnContactDelete: PropTypes.func.isRequired,
};

export default ContactList;
