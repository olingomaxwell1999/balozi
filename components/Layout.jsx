import dynamic from 'next/dynamic';
import Head from 'next/head';
const Footer = dynamic(() => import('../components/Footer'), {ssr: false});
const Enquirestrip = dynamic(() => import('./Enquirestrip'), {ssr: false});
const Navbar = dynamic(() => import('./Navbar'), {ssr: false});

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Reveal Estate</title>
      </Head>
      <div className='main'>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Enquirestrip/>
          <Footer />
        </footer>
      </div>
    </>
  );
}