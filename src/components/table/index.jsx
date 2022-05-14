import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderRow, TableColumn, TableRow, TableText, Wrapper } from "./styles";

function Table({ locations }) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <HeaderRow>
        <TableColumn>
          <TableText style={{ fontWeight: "bold" }}>Name</TableText>
        </TableColumn>
        <TableColumn>
          <TableText style={{ fontWeight: "bold" }}>Type</TableText>
        </TableColumn>
        <TableColumn>
          <TableText style={{ fontWeight: "bold" }}>Dimension</TableText>
        </TableColumn>
        <TableColumn style={{ borderRightWidth: 0 }}>
          <TableText style={{ fontWeight: "bold" }}>Residen Count</TableText>
        </TableColumn>
      </HeaderRow>
      {locations.map((item, index) => {
        return (
          <TableRow
            key={index}
            onClick={() =>
              navigate("/residents", { state: { location: item } })
            }
          >
            <TableColumn>
              <TableText>{item.name}</TableText>
            </TableColumn>
            <TableColumn>
              <TableText>{item.type}</TableText>
            </TableColumn>
            <TableColumn>
              <TableText>{item.dimension}</TableText>
            </TableColumn>
            <TableColumn style={{ borderRightWidth: 0 }}>
              <TableText>{item.residents.length}</TableText>
            </TableColumn>
          </TableRow>
        );
      })}
    </Wrapper>
  );
}

export default Table;
