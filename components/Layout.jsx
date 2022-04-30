import styles from "../styles/Layout.module.css";
import utilStyles from "../styles/utils.module.css";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Javier Mondragon";
export const siteTitle = "Mi sitio web con next.js";

export default function Layout({ children, home, title, description }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/sexa.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            ></Image>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/img/sexa2.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                ></Image>
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
       
        <nav>
          <Link href="/">
            <a>Inicio | </a>
          </Link>
          <Link href="/blog">
            <a>Blog | </a>
          </Link>
          <Link href="/contact">
            <a>Contacto | </a>
          </Link>
          <Link href="/about">
            <a>Sobre Mi | </a>
          </Link>
          <Link href="/lalo">
            <a>Lalo | </a>
          </Link>
        </nav>

      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}

Layout.defaultProps = {
  title: "Mi sitio web con Next",
  description: "Este es un sitio web para aprender con next.js",
};