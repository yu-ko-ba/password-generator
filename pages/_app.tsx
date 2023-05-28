import { theme } from "@/utils/theme";
import {
  AppBar,
  Container,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <Typography variant="h5">パスワードジェネレーター</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="xs">
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
