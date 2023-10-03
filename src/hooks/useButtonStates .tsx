import { useState } from 'react';

export const useButtonStates = () => {
  const [buttonStates, setButtonStates] = useState({
    login: {
      backgroundColor: 'transparent',
      textColor: 'black',
    },
    receiveLoginLink: {
      backgroundColor: 'transparent',
      textColor: 'black',
    },
    loginWithGoogle: {
      backgroundColor: 'transparent',
      textColor: 'black',
    },
    loginWithFacebook: {
      backgroundColor: 'transparent',
      textColor: 'black',
    },
    loginWithLinkedIn: {
      backgroundColor: 'transparent',
      textColor: 'black',
    },
  });

  const handleButtonPressIn = (buttonName: keyof typeof buttonStates) => {
    setButtonStates({
      ...buttonStates,
      [buttonName]: {
        ...buttonStates[buttonName],
        backgroundColor: 'black',
        textColor: 'white',
      },
    });
  };

  const handleButtonPressOut = (buttonName: keyof typeof buttonStates) => {
    setButtonStates({
      ...buttonStates,
      [buttonName]: {
        ...buttonStates[buttonName],
        backgroundColor: 'transparent',
        textColor: 'black',
      },
    });
  };

  return { buttonStates, handleButtonPressIn, handleButtonPressOut };
};
