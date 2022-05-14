import React from "react";
import Pagination from "../../components/pagination";
import Table from "../../components/table";
import { Wrapper } from "./styles";
import useLocationsLogic from "./useLocationsLogic";

function Locations() {
  const { currPage, pageCount, locations, setCurrPage } = useLocationsLogic();
  return (
    <Wrapper>
      <Pagination
        currPage={currPage}
        pageCount={pageCount}
        setCurrPage={setCurrPage}
      />

      <Table locations={locations} />
    </Wrapper>
  );
}

export default Locations;
