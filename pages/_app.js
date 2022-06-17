import "@fontsource/rubik";
import '../styles/globals.css'
import { store } from "../redux/store"
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import "@fontsource/rubik/500.css"; // Weight 500.
import "@fontsource/rubik/300.css"; // Weight 500.
import "@fontsource/rubik/700.css"; // Italic variant.
import { CacheProvider, EmotionCache } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

//export default MyApp
export default store.withRedux(MyApp);
