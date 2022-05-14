import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { CardsWrapper, NotFoundText, Title } from "./styles";
import Card from "../../components/card";
function Residents() {
  const [residentArr, setResidentArr] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchResidents();
  }, []);

  const fetchResidents = async () => {
    location.state?.location?.residents.map(async (resident) => { //for each resident fetch data and add to residentArr
      const res = await axios.get(resident);
      setResidentArr((residents) => [...residents, res.data]);
    });
  };
  if (!location.state?.location) return <div>not found</div>; // if user directly comes to link without clicking from locations
  return (
    <div>
      <Title>Location: {location.state?.location?.name}</Title>
      {residentArr.length ? (
        <CardsWrapper>
          {residentArr.map((item, index) => {
            return <Card resident={item} key={index} />;
          })}
        </CardsWrapper>
      ) : (
        <NotFoundText>No residents found:(</NotFoundText>
      )}
    </div>
  );
}

export default Residents;
