import Head from "next/head";
import fetch from "node-fetch";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { useEffect, useState } from "react";

import PrefixedLink from "../components/PrefixedLink";

const siteTitle = "Default Title";
const Home = ({ metaTags }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{(metaTags && metaTags.title) || siteTitle}</title>
        <meta
          name="description"
          content={
            (metaTags && metaTags.description) || "This is default description."
          }
        />
        {metaTags && (
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
        )}

        <meta
          name="og:title"
          property="og:title"
          content={(metaTags && metaTags.title) || siteTitle}
        />
        <meta
          name="og:description"
          property="og:description"
          content={
            (metaTags && metaTags.description) || "This is default description."
          }
        />

        <meta
          name="twitter:title"
          content={(metaTags && metaTags.title) || siteTitle}
        />
        <meta
          name="twitter:description"
          content={
            (metaTags && metaTags.description) || "This is default description."
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        {metaTags && (
          <meta
            name="twitter:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
        )}
      </Head>

      <Layout home>
        <section className={utilStyles.headingMd}>
          <p>Next.js</p>
          <p>Meta tags for this page coming from API.</p>
          <small>
            Go to First post then return to this page & Check Network in
            console.
          </small>
          <br />
          <PrefixedLink href="/posts/first-post">
            <a>Go To First Post</a>
          </PrefixedLink>
        </section>
      </Layout>
    </>
  );
};

// This gets called on every request getServerSideProps
Home.getInitialProps = async () => {
  console.log("Fetching");

  // Fetch data from external API
  const res = await fetch(
    `https://run.mocky.io/v3/a330a94a-8d78-4696-ab3c-7a7345eb7c31`
  );
  const data = await res.json();
  console.log("data", data);

  // Pass data to the page via props
  return { metaTags: data.metatags };
};
export default Home;
