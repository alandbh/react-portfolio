import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/Header";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href={`https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;700&display=swap`}
                        rel="stylesheet"
                    />
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/site.webmanifest"></link>
                </Head>
                <body className="bg-color-base text-white/90 flex flex-col items-center">
                    <div className="wrapper-all max-w-[1800px] px-5 md:px-0 ">
                        <Header />
                        <Main />
                    </div>
                    <NextScript />
                </body>
            </Html>
        );
    }
}
