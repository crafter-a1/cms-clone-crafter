
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Initializer = ({ setIsReady }) => {
  const ref = useRef();
  ref.current = setIsReady;

  useEffect(() => {
    ref.current(true);
  }, []);

  return null;
};

Initializer.propTypes = {
  setIsReady: PropTypes.func.isRequired,
};

export default Initializer;
