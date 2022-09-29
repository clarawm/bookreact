import React from "react";
import logobook from "assets/img/logobook.png"
import { GrLogout } from "react-icons/gr";
import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "hooks/authHook";

const Menu = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate();
  async function logout() {
    await signOut()
    navigate('/login')
  }
  return (
    <S.Cabecalho>
      <picture>
        <Link to="/">
          <img src={logobook} alt="Imagens principais" />
        </Link>
      </picture>
      <nav>
        {
          user ? (
            <ul>
              <li>

                <button onClick={logout}>{user.name} <GrLogout /></button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/cadastrar">Cadastro</Link>
              </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          )
        }
      </nav>
    </S.Cabecalho >
  );
};
export default Menu;