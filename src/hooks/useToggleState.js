import { useState } from 'react';

function useToggle(initialVal = false) {
  const [toggleState, setToggle] = useState(initialVal);
  const toggle = () => {
    setToggle(!toggleState);
  };
  return [toggleState, setToggle];
}

export default useToggle;
