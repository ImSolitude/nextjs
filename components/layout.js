import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

import PrefixedLink from "../components/PrefixedLink";

const name = "Muhammad J";
export const siteTitle = "Default Title";
const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <header className={`${styles.header}`}>
        {home ? (
          <>
            <img
              src={"/images/profile.jpg"}
              alt={name}
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            />
            <h1 className={utilStyles.heading2Xl}>{"M"}</h1>
          </>
        ) : (
          <>
            <PrefixedLink href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </PrefixedLink>
            <h2 className={utilStyles.headingLg}>
              <PrefixedLink href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </PrefixedLink>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <PrefixedLink href="/">
            <a>← Back to home</a>
          </PrefixedLink>
        </div>
      )}
    </div>
  );
};

export default Layout;
