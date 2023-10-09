import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact} from "redux/contacts/operations";
import { selectContacts, selectStatusFilter } from "redux/selectors";

import css from "./ContactList.module.css"

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filtered = useSelector(selectStatusFilter);

  

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );



  return (
    <ul className={css.contact_list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.contact_list_item} key={id}>
          {name}:{number}
          <button className={css.contact_btn} onClick={() => dispatch(deleteContact(id))} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
  };

  ContactsList.protoTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string),
  onDeleteContact: PropTypes.func,
};