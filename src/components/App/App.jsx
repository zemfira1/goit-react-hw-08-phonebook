import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Navigation } from 'components/Navigation';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/operations';
import { useAuth } from 'hooks';
import { Update } from 'components/Update';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { PrivatRoute } from 'components/PrivatRoute/PrivatRoute';

const Contacts = lazy(() => import('../../pages/Contacts'));
const Register = lazy(() => import('../../pages/Register'));
const Login = lazy(() => import('../../pages/Login'));
const NotFound = lazy(() => import('../NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <Update />
  ) : (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route
          path="contacts"
          element={<PrivatRoute component={Contacts} redirectTo="/login" />}
        />
        <Route
          path="register"
          element={
            <RestrictedRoute component={Register} redirectTo="/contacts" />
          }
        />
        <Route
          path="login"
          element={<RestrictedRoute component={Login} redirectTo="/contacts" />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
