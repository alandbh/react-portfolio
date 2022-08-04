import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
<link href={`https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;700&display=swap`} rel="stylesheet" />
            </Head>
        <body className="bg-color-base text-white/90">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}