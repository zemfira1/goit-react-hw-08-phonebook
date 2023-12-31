import { FiXCircle } from 'react-icons/fi';
import {
  Button,
  CloseIcon,
  FormEl,
  Input,
  Label,
  TitleEl,
} from './ModalForm.styled';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateContact } from 'redux/operations';

export const ModalForm = ({ onClose, id, nameIt, numberIt }) => {
  const [name, setName] = useState(nameIt);
  const [number, setNumber] = useState(numberIt);
  const dispatch = useDispatch();

  const inputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const dataSubmit = event => {
    event.preventDefault();

    dispatch(updateContact({ id, name, number }));

    reset();
    onClose();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <CloseIcon>
        <FiXCircle size={30} color="#424442" onClick={onClose} />
      </CloseIcon>
      <TitleEl>Change contact details</TitleEl>
      <FormEl onSubmit={dataSubmit}>
        <Label>
          {' '}
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={inputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          {' '}
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={inputChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Update contact</Button>
      </FormEl>
    </>
  );
};
