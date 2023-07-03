import { theme } from "@/utils/theme";
import { MoreVert } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <Typography variant="h5">パスワードジェネレーター</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            onClick={(e: MouseEvent<HTMLElement>) => {
              setAnchorEl(e.currentTarget);
            }}
          >
            <MoreVert />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => {
              setAnchorEl(null);
            }}
          >
            <MenuItem
              onClick={() => {
                router.push(
                  "https://github.com/yu-ko-ba/password-generator/blob/main/LICENSE",
                );
              }}
            >
              ライセンス
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="xs">
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
