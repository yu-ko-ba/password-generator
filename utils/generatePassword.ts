import { lowers } from "./lowers";
import { numerals } from "./numerals";
import { uppers } from "./uppers";

export const generatePassword = (
  includeUpper: boolean,
  includeLower: boolean,
  includeNumeral: boolean,
  additionalChars: string,
  passwordLength: number,
): string => {
  let chars = additionalChars;
  if (includeUpper) {
    chars += uppers;
  }
  if (includeLower) {
    chars += lowers;
  }
  if (includeNumeral) {
    chars += numerals;
  }

  const a = new Uint32Array(passwordLength);
  self.crypto.getRandomValues(a);

  let password = "";
  a.forEach((n) => {
    password += chars[n % chars.length];
  });

  return password;
};
