import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from 'redux/filter/filterSlice';
import { selectStatusFilter } from 'redux/selectors';
import css from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch()
  const filter = useSelector(selectStatusFilter);

  const onChange = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
     <label className={css.contact_label}>
      Find contacts by name
      <input
      className={css.filter_shape}      
      value={filter}      
        onChange={onChange}
        type="text"
        name={filter}
        placeholder="Please input name"
      />
      </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  OnChange: PropTypes.func,
};