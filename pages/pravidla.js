import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import fs from "fs";
import path from "path";
import marked from "marked";

export default function Pravidla({ content }) {
  return (
    <>
      <Head>
        <title>Pravidla | Arfi</title>
        <meta name="description" content="Pravidla Arfi Discord serveru." />
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
  const title = "pravidla";
  const content = fs.readFileSync(path.join("content", title + ".md"), "utf-8");

  return {
    props: {
      content,
    },
  };
}
