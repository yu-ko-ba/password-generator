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
};

export default function CharOptionsForm(
  {
    upperIsSelected,
    onChangeUpper,
    lowerIsSelected,
    onChangeLower,
    numeralIsSelected,
    onChangeNumeral,
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
    </FormGroup>
  );
}
