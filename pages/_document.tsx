import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta key="metaCharSet" charSet="utf-8" />
          <meta key="metaAuthor" name="author" content="Alan Hu" />
          <meta
            key="metaDescription"
            name="description"
            content="Alan Hu's personal site"
          />
          <meta key="metaOgImage" property="og:image" content="" />
          <meta
            key="metaOgDescription"
            property="og:description"
            content="Alan Hu's personal site"
          />
          <meta key="metaOgTitle" property="og:title" content="Alan Hu" />

          <link
            key="linkRelAppl57x57"
            rel="apple-touch-icon"
            sizes="57x57"
            href="/manifest/apple-icon-57x57.png"
          />
          <link
            key="linkRelAppl60x60"
            rel="apple-touch-icon"
            sizes="60x60"
            href="/manifest/apple-icon-60x60.png"
          />
          <link
            key="linkRelAppl72x72"
            rel="apple-touch-icon"
            sizes="72x72"
            href="/manifest/apple-icon-72x72.png"
          />
          <link
            key="linkRelAppl76x76"
            rel="apple-touch-icon"
            sizes="76x76"
            href="/manifest/apple-icon-76x76.png"
          />
          <link
            key="linkRelAppl114x114"
            rel="apple-touch-icon"
            sizes="114x114"
            href="/manifest/apple-icon-114x114.png"
          />
          <link
            key="linkRelAppl120x120"
            rel="apple-touch-icon"
            sizes="120x120"
            href="/manifest/apple-icon-120x120.png"
          />
          <link
            key="linkRelAppl144x144"
            rel="apple-touch-icon"
            sizes="144x144"
            href="/manifest/apple-icon-144x144.png"
          />
          <link
            key="linkRelAppl152x152"
            rel="apple-touch-icon"
            sizes="152x152"
            href="/manifest/apple-icon-152x152.png"
          />
          <link
            key="linkRelAppl180x180"
            rel="apple-touch-icon"
            sizes="180x180"
            href="/manifest/apple-icon-180x180.png"
          />

          <link
            key="linkRelManifest"
            rel="manifest"
            href="/manifest/manifest.json"
          />
          <link
            key="linkRelFavicon32x32"
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/manifest/favicon-32x32.png"
          />
          <link
            key="linkRelFavicon96x96"
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/manifest/favicon-96x96.png"
          />
          <link
            key="linkRelFavicon16x16"
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/manifest/favicon-16x16.png"
          />

          <meta
            key="metaMsApp"
            name="msapplication-TileColor"
            content="#da532c"
          />
          <meta key="metaThemeColor" name="theme-color" content="#f70502" />
          <meta
            key="metaContentYes"
            content="yes"
            name="apple-mobile-web-app-capable"
          />

          <link
            key="linkFontGoogleApi"
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            key="linkFontStatic"
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            key="linkFontNanum"
            href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
