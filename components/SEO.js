// import { useEffect, useState } from "react";
// import fetch from "node-fetch";
// import Head from "next/head";

// const siteTitle = "Default Title";

// const SEO = ({ metas }) => {
//   const [metaTags, setMetaTags] = useState(metas);
//   return (
//     <Head>
//       <link rel="icon" href="/favicon.ico" />
//       <title>{(metaTags && metaTags.title) || siteTitle}</title>
//       <meta
//         name="description"
//         content={
//           (metaTags && metaTags.description) || "This is default description."
//         }
//       />
//       {metaTags && (
//         <meta
//           property="og:image"
//           content={`https://og-image.now.sh/${encodeURI(
//             siteTitle
//           )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
//         />
//       )}

//       <meta
//         name="og:title"
//         property="og:title"
//         content={(metaTags && metaTags.title) || siteTitle}
//       />
//       <meta
//         name="og:description"
//         property="og:description"
//         content={
//           (metaTags && metaTags.description) || "This is default description."
//         }
//       />

//       <meta
//         name="twitter:title"
//         content={(metaTags && metaTags.title) || siteTitle}
//       />
//       <meta
//         name="twitter:description"
//         content={
//           (metaTags && metaTags.description) || "This is default description."
//         }
//       />
//       <meta name="twitter:card" content="summary_large_image" />
//       {metaTags && (
//         <meta
//           name="twitter:image"
//           content={`https://og-image.now.sh/${encodeURI(
//             siteTitle
//           )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
//         />
//       )}
//     </Head>
//   );
// };

// export default SEO;
