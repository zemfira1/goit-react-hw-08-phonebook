import { List } from './ContactList.styled';
import { ContactItem } from './ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { Loader } from 'components/Loader';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {filteredContacts.length > 0 && (
        <List>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
          ))}
        </List>
      )}
      {error && alert('Sorry, something is wrong!')}
    </>
  );
};
