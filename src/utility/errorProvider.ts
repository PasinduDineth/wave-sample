import { IErrorProvider } from "../interfaces/ErrorProviderInterface";

// Mandatory Fields = MANDATORY_[FIELD NAME]
const errors: IErrorProvider[] = [
  { id: 1, message: 'Name field should not be empty.', code: 'MANDATORY_NAME' },
  { id: 2, message: 'Email field should not be empty.', code: 'MANDATORY_EMAIL' },
  { id: 3, message: 'Please enter a valid email address.', code: 'PATTERN_EMAIL' },
  { id: 4, message: 'Please enter a valid name.', code: 'PATTERN_NAME' }
];

export function getErrorMessage(code: string): string | undefined {
  const error = errors.find(err => err.code === code);
  return error?.message;
}
