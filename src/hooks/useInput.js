import { useEffect, useState } from 'react';

function useInput(validateFunction) {

  const [value,setValue] = useState('');
  const [isTouched,setIsTouched] = useState(false);
  const [isMount,setIsMount] = useState(true);

  useEffect(()=>{
    setIsMount(false);
  },[]);

  const validInput = validateFunction(value);
  const hasErrors = !validInput && isTouched;

  const valueChangeHandler = (event) =>{
    setValue(event.target.value);
  }

  const valueLoseFocusHandler = () =>{
    setIsTouched(true);
  }
  

  return {
    value,
    hasErrors,
    isTouched,
    isMount,
    valueChangeHandler,
    valueLoseFocusHandler,
  }
}

export default useInput;