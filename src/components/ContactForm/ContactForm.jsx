import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Span, Button } from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  static propTypes = {
    OnContactAdd: PropTypes.func.isRequired,
  };

  state = INITIAL_STATE;

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.OnContactAdd({ ...this.state, id: nanoid() });
    this.resetForm();
  };

  resetForm = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Label>
          <Span>Name</Span>
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
          />
        </Label>
        <Label>
          <Span>Number</Span>
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInputChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
