import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <p>{name}: {number}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );

}