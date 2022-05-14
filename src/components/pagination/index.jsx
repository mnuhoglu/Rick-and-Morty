import React from "react";
import { PaginationButton, PaginationRow, PaginationText } from "./styles";

function Pagination({ currPage, pageCount, setCurrPage }) {
  return (
    <PaginationRow>
      <PaginationButton
        onClick={() => setCurrPage(currPage - 1)}
        disabled={currPage === 1}
      >
        {"<"}
      </PaginationButton>
      <PaginationButton
        onClick={() => setCurrPage(currPage + 1)}
        disabled={currPage === pageCount}
      >
        {">"}
      </PaginationButton>
      <PaginationText>
        Page {currPage} of {pageCount}
      </PaginationText>
    </PaginationRow>
  );
}

export default Pagination;
