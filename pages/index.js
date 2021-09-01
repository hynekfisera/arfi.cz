import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import youtubeScreen from "../public/assets/youtubeScreen.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hlavní stránka | Arfi</title>
        <meta name="description" content="Natáčím návody týkající se programování, softwaru, serverů a dalších věcí ze světa technologií. Doufám, že vám má tvorba nějakým způsobem pomůže ať už si chcete vytvořit web, grafiku nebo nastavit herní server." />
      </Head>
      <Header darkmode={true} />
      <main className="index">
        <div className="container">
          <section className="intro">
            <div className="row">
              <div className="col-md-6">
                <h2>Zdravím, já jsem Arfi</h2>
                <h1>Natáčím ty nejrychlejší návody na weby, hry a servery.</h1>
              </div>
              <div className="col-md-6">
                <Image src={youtubeScreen} alt="YouTube channel screen" />
              </div>
            </div>
          </section>
          <section className="discord">
            <div>
              <span>Staň se členem komunity</span>
              <p>Na mém Discord serveru najdeš pomoc k videím, upozornění na streamy a videa i místnosti na chat</p>
            </div>
            <a href="https://discord.gg/2Fs4pkpCcG" target="_blank" rel="noreferrer noopener" className="btn btn-discord">
              <FontAwesomeIcon icon={faDiscord} /> Discord
            </a>
          </section>
        </div>
      </main>
      <Footer darkmode={true} />
    </>
  );
}
