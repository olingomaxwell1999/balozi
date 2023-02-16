import Head from 'next/head';
import Footer from '../components/Footer';
import Enquirestrip from './Enquirestrip';
import Navbar from './Navbar';

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