import { Modal } from 'components/Modal';
import { Contact, ButtonDelete } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { FiPhone } from 'react-icons/fi';
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
    <Contact key={id}>
      <FiPhone />
      <p>
        {name}: {number}
      </p>
      <ButtonDelete onClick={() => deleteThisContact(id)}>Delete</ButtonDelete>
      <ButtonDelete onClick={() => setOpen(true)}>Update</ButtonDelete>
      <Modal
        id={id}
        nameIt={name}
        numberIt={number}
        open={open}
        onClose={() => setOpen(false)}
      />
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
