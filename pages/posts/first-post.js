import React from "react";
import Head from "next/head";

import Layout from "../../components/layout.js";

const firstPost = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        {/* <p>Meta tags for this post also from API.</p> */}
      </Layout>
    </>
  );
};

export default firstPost;
