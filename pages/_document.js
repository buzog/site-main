import { Html, Head, Main, NextScript } from 'next/document'
import logo from '../src/image.png';

export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
      <Head>
        {/* Basic description for search engines */}
        <meta name="description" content="فريق بزوغ — نشر المعرفة وصناعة التأثير. تعرّف على الفريق، مشاريعنا، وطرق التواصل." />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="فريق بزوغ" />
        <meta property="og:description" content="فريق بزوغ — نشر المعرفة وصناعة التأثير. تعرّف على مشاريعنا وأعضاء الفريق." />
        <meta property="og:image" content={logo} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="فريق بزوغ" />
        <meta name="twitter:description" content="فريق بزوغ — نشر المعرفة وصناعة التأثير. تعرّف على مشاريعنا وأعضاء الفريق." />
        <meta name="twitter:image" content={logo} />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
