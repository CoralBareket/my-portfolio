import { useState } from 'react';

function useToggle(initialState = false) {
  const [isToggled, setIsToggled] = useState(initialState);

  const toggle = () => setIsToggled(!isToggled);

  return [isToggled, toggle];
}

export default useToggle;
