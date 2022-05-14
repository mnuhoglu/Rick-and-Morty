import { useEffect, useState } from "react";
import { getLocations } from "../../api/api";

var pageCount;

function useLocationsLogic() {
  const [currPage, setCurrPage] = useState(1);
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetchData();  //fetch data whenever current page is changed
  }, [currPage]);

  const fetchData = async () => {
    const res = await getLocations(currPage);
    setLocations(res.results);
    pageCount = res.info.pages;
  };

  return {
    currPage,
    pageCount,
    locations,
    setCurrPage,
  };
}

export default useLocationsLogic;
