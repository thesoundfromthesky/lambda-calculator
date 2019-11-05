import { operators } from "../data";

export const validate = input => {
  if (input.includes(".")) return false;
  for (const { char } of operators) {
    if (input.includes(char)) return false;
  }
  return true;
};
