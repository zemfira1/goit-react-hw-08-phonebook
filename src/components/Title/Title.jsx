import PropTypes from 'prop-types';
import { TitleEl } from './Title.styled';

export const Title = ({ title, children }) => (
  <>
    <TitleEl>{title}</TitleEl>
    {children}
  </>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
