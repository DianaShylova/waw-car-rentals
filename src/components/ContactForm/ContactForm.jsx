import css from "./ContactForm.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectContacts } from "redux/selectors";
import { addContact } from "redux/contacts/operations";

export const ContactForm = () => {
   const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
   const [contactName, setcontactName] = useState('');
  const [number, setNumber] = useState('');
  

  const handleSubmit = event => {
    event.preventDefault();

     if (contacts.some(({ name }) => name === contactName)) {
      window.alert(`${contactName} is already in your contacts`);
      return;
    }

    dispatch(
      addContact({
        name: contactName,
        number,        
      })
    );

    setcontactName('');
    setNumber('');

  };
  
  const handleChange = event => {
    const { value, name } = event.target;

    switch (name) {
      case 'name':
        setcontactName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

    return (
      <form className={css.submit_form} onSubmit={handleSubmit}>
        <h3 className={css.name_title}>Name</h3>
        <input className={css.shape_input}
          type="text"
          name="name"
          value={contactName}
          onChange={handleChange}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          
          required
        />
        <h3 className={css.number_title}>Number</h3>
        <input className={css.shape_input}
          type="tel"
          name="number"
          value={number}
           onChange={handleChange}
          // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={css.add_contact_btn} >Add contact</button>
      </form>
    );
  
};