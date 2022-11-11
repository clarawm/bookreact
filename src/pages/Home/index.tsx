import React, { useEffect, useState } from "react";
import carrousel from "assets/img/carrousel.png";
import book from "assets/img/book..png";
import * as S from "./styles";
import { CardComponent } from "components";
import dados from "services/dados";
import { IMessageData } from "interfaces/message.interface";
import { apiMessage } from "services/data";

const Home = () => {
  const [messages, setMessage] = useState<IMessageData[]>()
  useEffect(() => {
    const fetchData = async () => {
      const response = await apiMessage.index()
      setMessage(response.data)
    }
    fetchData()
  }, [])
  
  return (
    <S.Home>
      <picture>
        <img src={carrousel} alt="Imagens principais" />
        <div>
            <img src={book} alt="Imagens principais" /> 
          <aside>
            {messages && messages.map((item) => <CardComponent dados={item} />)}
          </aside>
        </div>
      </picture>


    </S.Home>
  );
};
export default Home;