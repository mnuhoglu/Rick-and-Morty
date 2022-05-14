import React from "react";
import {
  CardWrapper,
  NameText,
  ResidentImage,
  Status,
  StatusText,
  Text,
  TextWrapper,
} from "./styles";

function Card({ resident }) {
  return (
    <CardWrapper>
      <Status
        style={{
          backgroundColor:
            resident.status === "Alive"
              ? "green"
              : resident.status === "Dead"
              ? "red"
              : "gray",
        }}
      >
        <StatusText>{resident.status}</StatusText>
      </Status>

      <ResidentImage src={resident?.image} />

      <TextWrapper>
        <NameText>{resident.name}</NameText>
        <Text>Species: {resident.species}</Text>
        <Text>Type: {resident.type.length ? resident.type : "-"}</Text>
        <Text>Origin: {resident.origin.name}</Text>
      </TextWrapper>
    </CardWrapper>
  );
}

export default Card;
