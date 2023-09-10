import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Loader = () => {
  return (
    <ThreeDots
      height="60"
      width="60"
      radius="8"
      color="#424442"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

Loader.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  radius: PropTypes.number,
  color: PropTypes.string,
  ariaLabel: PropTypes.string,
  wrapperStyle: PropTypes.object,
  wrapperClassName: PropTypes.string,
  visible: PropTypes.bool,
};
