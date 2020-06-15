import Head from "next/head";
import fetch from "node-fetch";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { useEffect, useState } from "react";

const siteTitle = "Default Title";
const Home = ({ data }) => {
  const [metaTags, setMetaTags] = useState();
  useEffect(() => {
    console.log(data.metatags);
    setMetaTags(data.metatags);
  }, []);
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
          <p>This is a sample website.</p>
        </section>
      </Layout>
    </>
  );
};

// This gets called on every request getServerSideProps
export async function getServerSideProps() {
  console.log("Hi");

  // Fetch data from external API
  const res = await fetch(
    `https://run.mocky.io/v3/a330a94a-8d78-4696-ab3c-7a7345eb7c31`
  );
  const data = await res.json();
  console.log("data", data);

  // Pass data to the page via props
  return { props: { data } };
}
export default Home;
