import _ from "lodash";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { getEntriesByContentType } from "../lib/helpers";
import styles from "../styles/Home.module.css";

const Home: NextPage = (props) => {
  const page = _.get(props, "page");
  const books = _.get(props, "books");

  const {
    fields: { headline },
  } = page;

  return (
    <div className={styles.container}>
      <Head>
        <title>{headline}</title>
        <meta name="description" content="Powered by Contentful and Algolia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{headline}</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export async function getStaticProps() {
  const pageEntries = await getEntriesByContentType("landingPage", "home-page");

  let homepageEntry;
  if (pageEntries) {
    homepageEntry = pageEntries.items[0];
  }

  const bookEntries = await getEntriesByContentType("book");

  let bookCollection;
  if (bookEntries) {
    bookCollection = bookEntries.items;
  }

  return {
    props: {
      page: homepageEntry ?? {},
      books: bookCollection ?? {},
    },
  };
}

export default Home;
