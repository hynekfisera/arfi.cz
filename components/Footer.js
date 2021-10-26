import React from "react";
import Link from "next/link";

export default function Footer({ darkmode }) {
  return (
    <footer className={darkmode ? "dark" : "light"}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6">
            <span>Sociální sítě</span>
            <ul>
              <li>
                <a href="https://youtube.com/phpmyarfi" target="_blank" rel="noreferrer noopener">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://instagram.com/hynekfisera" target="_blank" rel="noreferrer noopener">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com/hynekfisera" target="_blank" rel="noreferrer noopener">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/hynekfisera" target="_blank" rel="noreferrer noopener">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https:///github.com/hynekfisera" target="_blank" rel="noreferrer noopener">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-6">
            <span>Návody</span>
            <ul>
              <li>
                <a href="https://www.youtube.com/playlist?list=PLKkDvxLpWDX0JDM86Zmr6DYuJJk75Gk6c" target="_blank" rel="noreferrer noopener">
                  Minecraft server
                </a>
              </li>
              <li>
                <a href="https://youtube.com/playlist?list=PLKkDvxLpWDX3tt2K5gDDgcmar49HX_i7c" target="_blank" rel="noreferrer noopener">
                  TeamSpeak 3
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/playlist?list=PLKkDvxLpWDX0uqAfpBZRJDpg0YcbSExWE" target="_blank" rel="noreferrer noopener">
                  HTML a CSS
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/playlist?list=PLKkDvxLpWDX3Ye0Cet9DoLNb9IFDijmof" target="_blank" rel="noreferrer noopener">
                  Adobe Photoshop
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/playlist?list=PLKkDvxLpWDX3ZvnuVHh2faaIlSdVE_jPc" target="_blank" rel="noreferrer noopener">
                  Minecraft plugin
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/playlist?list=PLKkDvxLpWDX30NNTvIrqCq-R43Lf1rtM9" target="_blank" rel="noreferrer noopener">
                  Úvod do PHP
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-6">
            <span>Discord</span>
            <ul>
              <li>
                <a href="https://discord.gg/2Fs4pkpCcG" target="_blank" rel="noreferrer noopener">
                  Připojit se
                </a>
              </li>
              <li>
                <Link href="/informace">
                  <a>Informace</a>
                </Link>
              </li>
              <li>
                <Link href="/pravidla">
                  <a>Pravidla</a>
                </Link>
              </li>
              <li>
                <Link href="/informace#role-pro-tvůrce">
                  <a>YouTube rank</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-6">
            <span>Ostatní</span>
            <ul>
              <li>
                <Link href="mailto:hynek@oneflair.org">
                  <a>Kontakt</a>
                </Link>
              </li>
              <li>
                <Link href="#top">
                  <a>Zpět nahoru</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p>
          &copy; {new Date().getFullYear()} Hynek Fišera | Vytvořeno pomocí{" "}
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer noopener">
            Next.js
          </a>
        </p>
      </div>
    </footer>
  );
}
