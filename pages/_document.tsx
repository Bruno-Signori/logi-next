import Document, {DocumentProps, Head, Html, Main, NextScript} from 'next/document';

class MyDocumnet extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="pt">
      <Head>
        <meta charSet="utf-8"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;900&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }
}

export default MyDocumnet;