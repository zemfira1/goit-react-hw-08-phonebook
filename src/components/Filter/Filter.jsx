import { useDispatch, useSelector } from 'react-redux';
import { FilterZone, Input } from './Filter.styled';
import { toFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(toFilter(event.currentTarget.value));
  };

  return (
    <FilterZone>
      Find contact by name
      <Input type="text" value={filter} onChange={changeFilter} />
    </FilterZone>
  );
};
