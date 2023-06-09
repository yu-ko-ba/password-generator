import CharOptionsForm from "@/ui/organisms/CharOptionsForm";
import HeadWithOGP from "@/ui/organisms/HeadWithOGP";
import { generatePassword } from "@/utils/generatePassword";
import { Button, Slider, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [upperIsSelected, setUpperIsSelected] = useState(true);
  const [lowerIsSelected, setLowerIsSelected] = useState(true);
  const [numeralIsSelected, setNumeralIsSelected] = useState(true);
  const [hiraganaIsSelected, setHiraganaIsSelected] = useState(false);
  const [katakanaIsSelected, setkatakanaIsSelected] = useState(false);
  const [additionalChars, setAdditionalChars] = useState("");
  const [passwordLength, setPasswordLength] = useState(16);
  const [password, setPassword] = useState("");
  useEffect(() => {
    setPassword(
      generatePassword(
        upperIsSelected,
        lowerIsSelected,
        numeralIsSelected,
        hiraganaIsSelected,
        katakanaIsSelected,
        additionalChars,
        passwordLength,
      ),
    );
  }, []);

  return (
    <>
      <HeadWithOGP title="パスワードジェネレーター" />
      <Stack spacing={2}>
        <CharOptionsForm
          upperIsSelected={upperIsSelected}
          onChangeUpper={(selected) => {
            setUpperIsSelected(selected);
            setPassword(
              generatePassword(
                selected,
                lowerIsSelected,
                numeralIsSelected,
                hiraganaIsSelected,
                katakanaIsSelected,
                additionalChars,
                passwordLength,
              ),
            );
          }}
          lowerIsSelected={lowerIsSelected}
          onChangeLower={(selected) => {
            setLowerIsSelected(selected);
            setPassword(
              generatePassword(
                upperIsSelected,
                selected,
                numeralIsSelected,
                hiraganaIsSelected,
                katakanaIsSelected,
                additionalChars,
                passwordLength,
              ),
            );
          }}
          numeralIsSelected={numeralIsSelected}
          onChangeNumeral={(selected) => {
            setNumeralIsSelected(selected);
            setPassword(
              generatePassword(
                upperIsSelected,
                lowerIsSelected,
                selected,
                hiraganaIsSelected,
                katakanaIsSelected,
                additionalChars,
                passwordLength,
              ),
            );
          }}
          hiraganaIsSelected={hiraganaIsSelected}
          onChangeHiragana={(selected) => {
            setHiraganaIsSelected(selected);
            setPassword(
              generatePassword(
                upperIsSelected,
                lowerIsSelected,
                numeralIsSelected,
                selected,
                katakanaIsSelected,
                additionalChars,
                passwordLength,
              ),
            );
          }}
          katakanaIsSelected={katakanaIsSelected}
          onChangeKatakana={(selected) => {
            setkatakanaIsSelected(selected);
            setPassword(
              generatePassword(
                upperIsSelected,
                lowerIsSelected,
                numeralIsSelected,
                hiraganaIsSelected,
                selected,
                additionalChars,
                passwordLength,
              ),
            );
          }}
        />
        <TextField
          label="追加の文字（記号など）"
          value={additionalChars}
          onChange={(e) => {
            const chars = e.target.value;
            setAdditionalChars(chars);
            setPassword(
              generatePassword(
                upperIsSelected,
                lowerIsSelected,
                numeralIsSelected,
                hiraganaIsSelected,
                katakanaIsSelected,
                chars,
                passwordLength,
              ),
            );
          }}
        />
        <Typography>桁数</Typography>
        <Slider
          defaultValue={passwordLength}
          valueLabelDisplay="auto"
          min={1}
          max={256}
          step={1}
          onChange={(_, v) => {
            const n = v as number;
            setPasswordLength(n);
            setPassword(
              generatePassword(
                upperIsSelected,
                lowerIsSelected,
                numeralIsSelected,
                hiraganaIsSelected,
                katakanaIsSelected,
                additionalChars,
                n,
              ),
            );
          }}
          marks={[
            { value: 8 },
            { value: 16 },
            { value: 32 },
            { value: 64 },
            { value: 128 },
            { value: 256 },
          ]}
        />
        <Button
          variant="contained"
          onClick={() => {
            setPassword(
              generatePassword(
                upperIsSelected,
                lowerIsSelected,
                numeralIsSelected,
                hiraganaIsSelected,
                katakanaIsSelected,
                additionalChars,
                passwordLength,
              ),
            );
          }}
          disabled={!(upperIsSelected || lowerIsSelected || numeralIsSelected ||
            hiraganaIsSelected || katakanaIsSelected ||
            additionalChars.length !== 0)}
        >
          再生成
        </Button>
        <Typography
          sx={{ overflowWrap: "break-word" }}
        >
          {(upperIsSelected || lowerIsSelected || numeralIsSelected ||
              hiraganaIsSelected || katakanaIsSelected ||
              additionalChars.length !== 0)
            ? password
            : ""}
        </Typography>
      </Stack>
    </>
  );
}
