import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useProtectPage = (parameter) => {
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token) {
      parameter();
    } else {
      history.push('/');
    }
  }, [history, parameter]);
};

export default useProtectPage;
