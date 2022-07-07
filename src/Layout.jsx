import Head from 'next/head';
import Header from './components/Header';
import Navbar from './components/Navbar';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={`nextjs ${title}`} key={title} />
      </Head>

      {/* header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* children */}
      {children}
    </>
  );
}
