import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import CodeBlock from "@theme/CodeBlock";

import { ArrowRight, Badge, Button } from "../components";
import { Logo } from "../media";

import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout
      title={translate({
        id: "homepage.metaTitle",
        message: "React component documentation",
      })}
      description={translate({
        id: "homepage.metaDescription",
        message:
          "Documentation and live examples for the Niom Parts React component library.",
      })}
    >
      <main className={`niom-home ${styles.page}`}>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.eyebrow}>
              <span>
                <Translate id="homepage.eyebrow">
                  React component library
                </Translate>
              </span>
              <Badge className={styles.version} variant="secondary">
                v0.1.8
              </Badge>
            </div>
            <div className={styles.brand}>
              <img className={styles.logo} src={Logo} alt="" />
              <h1>Niom Parts UI</h1>
            </div>
            <p>
              <Translate id="homepage.description">
                A focused set of accessible React components for building
                consistent product interfaces without starting from zero.
              </Translate>
            </p>
            <div className={styles.actions}>
              <Button
                as={Link}
                to="/docs/getting-started/installation"
                variant="primary"
              >
                <span className={styles.buttonContent}>
                  <Translate id="homepage.getStarted">Get started</Translate>
                  <ArrowRight aria-hidden="true" size={18} />
                </span>
              </Button>
              <Button
                as={Link}
                to="/docs/components/atoms/button"
                variant="outline"
              >
                <Translate id="homepage.browseComponents">
                  Browse components
                </Translate>
              </Button>
            </div>
            <div className={styles.install}>
              <span className={styles.installLabel}>
                <Translate id="homepage.install">Install</Translate>
              </span>
              <CodeBlock language="bash">npm install niom-parts</CodeBlock>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
}
