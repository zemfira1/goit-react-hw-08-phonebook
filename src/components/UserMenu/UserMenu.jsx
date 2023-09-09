import { useAuth } from 'hooks';
import { UserCont } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const email = user.email;

  return (
    <UserCont>
      <p>{email}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </UserCont>
  );
};

export default UserMenu;
