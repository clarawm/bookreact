import React from "react";
import carrousel from "assets/img/carrousel.png";
import book from "assets/img/book..png";
import * as S from "./styles";
import { CardComponent } from "components";
import dados from "services/dados";

const Home = () => {
  return (
    <S.Home>
      <picture>
        <img src={carrousel} alt="Imagens principais" />
        <div>
          <img src={book} alt="Imagens principais" />
          <aside>
            {dados && dados.map((item) => <CardComponent dados={item} />)}
          </aside>
        </div>
      </picture>


    </S.Home>
  );
};
export default Home;
