import HeadWithOGP from "@/ui/organisms/HeadWithOGP";
import { Checkbox, FormControlLabel, FormGroup, Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <HeadWithOGP title="パスワードジェネレーター" />
      <Stack spacing={2}>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="abcdefghijklmnopqrstuvwxyz" />
        </FormGroup>
      </Stack>
    </>
  )
}
