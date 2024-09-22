import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice"
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Search contacts"
    />
  )

}