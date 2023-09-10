import { useAuth } from 'hooks';
import { LogoutBtn, UserCont } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const email = user.email;

  return (
    <UserCont>
      <p>{email}</p>
      <LogoutBtn type="button" onClick={() => dispatch(logout())}>
        Logout
      </LogoutBtn>
    </UserCont>
  );
};

export default UserMenu;
