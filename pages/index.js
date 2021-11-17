import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import youtubeScreen from "../public/assets/youtube.png";

export default function Home() {
  const playlists = [
    {
      name: "Jak vytvořit Minecraft server",
      color: "#02b1e5",
      link: "https://www.youtube.com/playlist?list=PLKkDvxLpWDX0JDM86Zmr6DYuJJk75Gk6c",
    },
    {
      name: "Jak nastavit TeamSpeak server",
      color: "#1147c6",
      link: "https://youtube.com/playlist?list=PLKkDvxLpWDX3tt2K5gDDgcmar49HX_i7c",
    },
    {
      name: "Jak vytvořit web",
      color: "#69d929",
      link: "https://www.youtube.com/playlist?list=PLKkDvxLpWDX0uqAfpBZRJDpg0YcbSExWE",
    },
    {
      name: "Jak na Adobe Photoshop",
      color: "#057cf4",
      link: "https://www.youtube.com/playlist?list=PLKkDvxLpWDX3Ye0Cet9DoLNb9IFDijmof",
    },
    {
      name: "Jak vytvořit vlastní Minecraft plugin",
      color: "#8a55a9",
      link: "https://www.youtube.com/playlist?list=PLKkDvxLpWDX3ZvnuVHh2faaIlSdVE_jPc",
    },
    {
      name: "Úvod do PHP",
      color: "#f48d05",
      link: "https://www.youtube.com/playlist?list=PLKkDvxLpWDX30NNTvIrqCq-R43Lf1rtM9",
    },
  ];

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
          <section className="playlists">
            <h2>Série návodů</h2>
            <span>Co byste se rádi naučili?</span>
            <div className="playlists">
              {playlists.map((playlist) => {
                return (
                  <a href={playlist.link} key={playlist.name} target="_blank" rel="noreferrer noopener" style={{ backgroundColor: playlist.color }}>
                    <h3>{playlist.name}</h3>
                  </a>
                );
              })}
            </div>
          </section>
          <hr />
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
