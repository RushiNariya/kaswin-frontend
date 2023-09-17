import React from 'react';

export const usePasswordShow = () => {
  const [passwordShown, setPasswordShown] = React.useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown((preValue) => !preValue);
  };

  const type = passwordShown ? 'text' : 'password';

  return { passwordShown, togglePasswordVisiblity, type };
};
