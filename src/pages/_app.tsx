import "@adaptavant/fonts/inter/index.css";

import { brand } from "@adaptavant/brands/setmore";
import { Root } from "@adaptavant/core";
import { translations } from "@adaptavant/translations/english";
import type { AppProps } from "next/app";
import "~/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Root brand={brand} colorScheme="light" translations={translations}>
      <Component {...pageProps} />
    </Root>
  );
}
