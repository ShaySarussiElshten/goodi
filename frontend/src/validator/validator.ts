
export type ValidatorFunction = (...args: any[]) => string;


export const isCharacter: ValidatorFunction = (val) => {
  return typeof val === 'string' ? '' : 'Value must be a character.';
}

export const minLength: ValidatorFunction = (val, length=4) => {
  return val.length >= length ? '' : `Value must be less than ${length} characters.`;
}

export const isNotEmpty: ValidatorFunction = (val) => {
  return val !== '' ? '' : 'Value cannot be empty.';
}