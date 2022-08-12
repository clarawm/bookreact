import React from "react";
import logobook from "assets/img/logobook.png"
import * as S from "./styles";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <S.Cabecalho>
      <picture>
        <Link to="/">
          <img src={logobook} alt="Imagens principais" />
        </Link>
      </picture>
      <nav>
        <ul>
          <li>
          <Link to="/cadastrar">Cadastro</Link>
          </li>
          <li>
           <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </S.Cabecalho>
  );
};

export default Menu;
