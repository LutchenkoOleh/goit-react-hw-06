import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </div>
  );
}