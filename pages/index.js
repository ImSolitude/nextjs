import Head from "next/head";
import fetch from "isomorphic-fetch";
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
            content={
              (metaTags.image && metaTags.image.media) ||
              `https://og-image.now.sh/${encodeURI(
                metaTags.title
              )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`
            }
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
            content={
              (metaTags.image && metaTags.image.media) ||
              `https://og-image.now.sh/${encodeURI(
                metaTags.title
              )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`
            }
          />
        )}
      </Head>

      <Layout home>
        <section className={utilStyles.headingMd}>
          <p>Next.js</p>
          <p>Meta tags for this page coming from API.</p>

          <br />
          <PrefixedLink href="/posts/first-post">
            <a>Go To First Post</a>
          </PrefixedLink>
        </section>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ req }) {
  const subdomain = req.headers.host.split(".")[0];
  const res = await fetch(
    `https://devapi.elevatus.jobs/api/candidate/v1/portal?sub_domain=${subdomain}`
  );
  const data = await res.json();

  console.log("data", data);

  return {
    props: {
      metaTags: data.results.portal.career.seo_home_page.data,
      subdomain: subdomain,
    }, // will be passed to the page component as props
  };
}

// This gets called on every request getServerSideProps
// Home.getInitialProps = async ({ req, isServer }) => {
//   let subdomain;
//   if (typeof window === "undefined") {
//     subdomain = req.headers.host.split(".")[0];
//     const res = await fetch(
//       `https://devapi.elevatus.jobs/api/candidate/v1/portal?sub_domain=${subdomain}`
//     );
//     const data = await res.json();

//     return {
//       metaTags: data.results.portal.career.seo_home_page.data,
//       subdomain: subdomain,
//     };
//   } else {
//     subdomain = window.location.hostname.split(".")[0];
//     console.log("Subdomain", subdomain);
//     // https://run.mocky.io/v3/a330a94a-8d78-4696-ab3c-7a7345eb7c31
//     const res = await fetch(
//       `https://run.mocky.io/v3/a330a94a-8d78-4696-ab3c-7a7345eb7c31`
//     );

//     const data = await res.json();

//     // console.log("Meta Tags:", data.results.portal.career.seo_home_page.data);

//     return {
//       // metaTags: data.results.portal.career.seo_home_page.data,
//       metaTags: data.metatags,
//       subdomain: subdomain,
//     };
//   }
// };
export default Home;
