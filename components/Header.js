import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";

import ArfiLogoWhite from "../public/assets/arfiWhite.svg";
import ArfiLogoBlack from "../public/assets/arfiBlack.svg";

export default function Header({ darkmode }) {
  return (
    <header className={darkmode ? "dark" : "light"}>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <a>
              <Image src={darkmode ? ArfiLogoWhite : ArfiLogoBlack} alt="Arfi logo" height={40} width={40} />
            </a>
          </Link>
        </div>
        <div className="links">
          <a href="https://discord.gg/2Fs4pkpCcG" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faDiscord} /> Discord
          </a>
          <a href="https://youtube.com/phpmyarfi" target="_blank" rel="noreferrer noopener" className="btn btn-youtube">
            <FontAwesomeIcon icon={faYoutube} /> YouTube
          </a>
        </div>
      </div>
    </header>
  );
}
