import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/authorisation/selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    user: useSelector(selectUser),
    isRefreshing: useSelector(selectIsRefreshing),
  };
};
