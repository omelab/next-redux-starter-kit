import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/signin">
            <a>Sign In</a>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        </li>
        <li>
          <Link href="/whoami">
            <a>Who Am I</a>
          </Link>
        </li>
      </ul>
    </div>

    <div className="has-text-centered">{children}</div>
  </div>
);

export default Layout;