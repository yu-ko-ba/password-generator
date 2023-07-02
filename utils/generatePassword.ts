import { getRandomNumber } from "./getRandomNumber";
import { hiragana } from "./hiragana";
import { katakana } from "./katakana";
import { lowers } from "./lowers";
import { numerals } from "./numerals";
import { uppers } from "./uppers";

export const generatePassword = (
  includeUpper: boolean,
  includeLower: boolean,
  includeNumeral: boolean,
  includeHiragana: boolean,
  includeKatakana: boolean,
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
  if (includeHiragana) {
    chars += hiragana;
  }
  if (includeKatakana) {
    chars += katakana;
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += chars[getRandomNumber(chars.length - 1)];
  }

  return password;
};
