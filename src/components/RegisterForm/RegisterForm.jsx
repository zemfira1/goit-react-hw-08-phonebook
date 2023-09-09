import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormEl, Label, Input, Button } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const inputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const dataSubmit = event => {
    event.preventDefault();

    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <FormEl onSubmit={dataSubmit}>
      <Label>
        {' '}
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={inputChange}
          required
        />
      </Label>
      <Label>
        {' '}
        Email
        <Input
          type="email"
          name="email"
          value={email}
          onChange={inputChange}
          required
        />
      </Label>
      <Label>
        {' '}
        Password
        <Input
          type="password"
          name="password"
          value={password}
          onChange={inputChange}
          required
        />
      </Label>
      <Button type="submit">Signup</Button>
    </FormEl>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
};
