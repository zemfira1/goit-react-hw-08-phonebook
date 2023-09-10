import { Modal } from 'components/Modal';
import {
  ContactTr,
  ContactTd1,
  ContactTd2,
  ContactTd3,
  ButtonEl,
} from './ContactItem.styled';
import PropTypes from 'prop-types';
import { AiOutlineLine } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { useState } from 'react';

export const ContactItem = ({ id, name, number }) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const deleteThisContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactTr key={id}>
      <ContactTd1>
        <AiOutlineLine />
      </ContactTd1>
      <ContactTd2>
        <p>{name}:</p>
      </ContactTd2>
      <ContactTd2>
        <p>{number}</p>
      </ContactTd2>
      <ContactTd3>
        <ButtonEl onClick={() => deleteThisContact(id)}>Delete</ButtonEl>
        <ButtonEl onClick={() => setOpen(true)}>Update</ButtonEl>
        <Modal
          id={id}
          nameIt={name}
          numberIt={number}
          open={open}
          onClose={() => setOpen(false)}
        />
      </ContactTd3>
    </ContactTr>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
