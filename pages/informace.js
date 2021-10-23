import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import fs from "fs";
import path from "path";
import marked from "marked";

export default function Informace({ content }) {
  return (
    <>
      <Head>
        <title>Informace | Arfi</title>
        <meta name="description" content="Informace o Arfi Discord serveru." />
      </Head>
      <Header darkmode={false} />
      <main className="markdown-page">
        <div className="content">
          <div className="container" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
        <hr />
      </main>
      <Footer darkmode={false} />
    </>
  );
}

export async function getStaticProps() {
  const title = "informace";
  const content = fs.readFileSync(path.join("content", title + ".md"), "utf-8");

  return {
    props: {
      content,
    },
  };
}
