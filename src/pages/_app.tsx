import type { AppProps } from "next/app";
import { Root } from "@adaptavant/core";
import brand from "@adaptavant/brands/dist/brands/setmore";
import styleEngine from "@adaptavant/emotion";
import translations from "@adaptavant/translations/dist/translations/english";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Root
      brand={brand}
      colorScheme="light"
      styleEngine={styleEngine}
      translations={translations}
    >
      <Component {...pageProps} />
    </Root>
  );
}
