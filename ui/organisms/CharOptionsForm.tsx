import { hiragana } from "@/utils/hiragana";
import { katakana } from "@/utils/katakana";
import { lowers } from "@/utils/lowers";
import { numerals } from "@/utils/numerals";
import { uppers } from "@/utils/uppers";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

type Props = {
  upperIsSelected: boolean;
  onChangeUpper: (selected: boolean) => void;
  lowerIsSelected: boolean;
  onChangeLower: (selected: boolean) => void;
  numeralIsSelected: boolean;
  onChangeNumeral: (selected: boolean) => void;
  hiraganaIsSelected: boolean;
  onChangeHiragana: (selected: boolean) => void;
  katakanaIsSelected: boolean;
  onChangeKatakana: (selected: boolean) => void;
};

export default function CharOptionsForm(
  {
    upperIsSelected,
    onChangeUpper,
    lowerIsSelected,
    onChangeLower,
    numeralIsSelected,
    onChangeNumeral,
    hiraganaIsSelected,
    onChangeHiragana,
    katakanaIsSelected,
    onChangeKatakana,
  }: Props,
) {
  return (
    <FormGroup>
      <FormControlLabel
        label={uppers}
        control={
          <Checkbox
            checked={upperIsSelected}
            onChange={(e) => {
              onChangeUpper(e.target.checked);
            }}
          />
        }
      />
      <FormControlLabel
        label={lowers}
        control={
          <Checkbox
            checked={lowerIsSelected}
            onChange={(e) => {
              onChangeLower(e.target.checked);
            }}
          />
        }
      />
      <FormControlLabel
        label={numerals}
        control={
          <Checkbox
            checked={numeralIsSelected}
            onChange={(e) => {
              onChangeNumeral(e.target.checked);
            }}
          />
        }
      />
      <FormControlLabel
        label={hiragana}
        control={
          <Checkbox
            checked={hiraganaIsSelected}
            onChange={(e) => {
              onChangeHiragana(e.target.checked);
            }}
          />
        }
      />
      <FormControlLabel
        label={katakana}
        control={
          <Checkbox
            checked={katakanaIsSelected}
            onChange={(e) => {
              onChangeKatakana(e.target.checked);
            }}
          />
        }
      />
    </FormGroup>
  );
}
