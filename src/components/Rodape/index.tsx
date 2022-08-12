import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

import * as S from "./styles";

const Rodape = () => {
  return (
    <S.Rodape>
      <div className="content">
        <a href="https://discord.com/" target="_blank" rel="noreferrer">
          <FaDiscord />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/login?lang=pt" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
      </div>
    </S.Rodape>
  );
};

export default Rodape;
