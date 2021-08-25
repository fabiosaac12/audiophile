import { useState } from 'react';
import { MenuContext } from './MenuContext';

export const MenuProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const handleShow = () => setVisible(true);
  const handleHide = () => setVisible(false);

  const contextValue = {
    visible,
    handleShow,
    handleHide,
  };

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};
