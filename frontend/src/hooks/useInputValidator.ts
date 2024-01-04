import React, { useState } from 'react';
import {ValidatorFunction} from '@/validator/validator'


const useInputValidator =(initialValue: string, validators: ValidatorFunction[])=> {
  const [value, setValue] = useState<string>(initialValue);
  const [errors, setErrors] = useState<string[]>([]);
  const [dirty, setDirty] = useState<boolean>(false);

  const validate = (value: string) => {
    if (!dirty) return; // Don't validate if input hasn't been touched
    
    let newErrors: string[] = [];
    validators.forEach(validator => {
      const error = validator(value);
      if (error) {
        newErrors.push(error);
      }
    });
    setErrors(newErrors);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!dirty) setDirty(true);
    setValue(e.target.value);
    validate(e.target.value);
  };

  return {
    value,
    errors,
    isValid: errors.length === 0,
    handleChange
  };
}

export default useInputValidator
