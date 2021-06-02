import Document, {DocumentProps, Head, Html, Main, NextScript} from 'next/document';
import { GA_TRACKING_ID } from '../lib/gtag'

class MyDocumnet extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="pt">
      <Head>
        <meta charSet="utf-8"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;900&display=swap" rel="stylesheet"/>

        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
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