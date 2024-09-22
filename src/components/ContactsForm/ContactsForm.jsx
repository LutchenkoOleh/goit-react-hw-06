import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";


export default function ContactsForm() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    dispatch(addContact(name, number));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="tel" name="number" placeholder="Number" required />
      <button type="submit">Add Contact</button>
    </form>
  );
}