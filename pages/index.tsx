import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import * as contentful from "contentful";
import Head from "next/head";
import Image from "next/image";
import { getEntriesByContentType } from "../lib/helpers";
import styles from "../styles/Home.module.css";
import algoliasearch from "algoliasearch";
import instantsearch from "instantsearch.js";
import { Hit } from "../components/Hit/Hit";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-hooks-web";
import _ from "lodash";
import { HomePageProps } from "../interfaces/pages";

const Home: NextPage<HomePageProps> = (props) => {
  const {
    page: {
      fields: { headline },
    },
    books,
  } = props;

  const appId = process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID;
  const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_KEY;
  const searchClient = algoliasearch(appId, apiKey);

  const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

  return (
    <div className={styles.container}>
      <Head>
        <title>{headline ?? ""}</title>
        <meta name="description" content="Powered by Contentful and Algolia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{headline}</h1>
        <InstantSearch indexName={indexName} searchClient={searchClient}>
          <SearchBox />
          <Hits className={styles.hit} hitComponent={Hit} />
        </InstantSearch>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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
      page: homepageEntry,
      books: bookCollection,
    },
  };
};

export default Home;
