import React from "react";
import carrousel from "assets/img/carrousel.png";
import book from "assets/img/book..png";
import * as S from "./styles";

const Home = () => {
  return (
    <S.Home>
        <picture>
          <img src={carrousel} alt="Imagens principais" />
          <div>
            <img src={book} alt="Imagens principais" />
          </div>
        </picture>
    </S.Home>
  );
};
export default Home;
