import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                    <link href={`https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,900&display=swap`} rel="stylesheet" />
                    <link href={"https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap"} rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument