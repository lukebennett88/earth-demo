import styleEngine from "@adaptavant/emotion";
import { createServer } from "@adaptavant/emotion/dist/server";
import NextDocument, {
  Head,
  Html,
  Main,
  NextScript,
  type DocumentContext,
} from "next/document";
import { Fragment } from "react";

const { ssr } = createServer(styleEngine.__emotion);

export default class Document extends NextDocument {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(context);
    return {
      ...initialProps,
      styles: (
        <Fragment>
          {initialProps.styles}
          <style {...ssr(initialProps.html)} />
        </Fragment>
      ),
    };
  }
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
