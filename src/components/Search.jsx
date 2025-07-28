import "../styles/Search.css";
import { useState } from "react";

function Content({ result, search }) {
  const [page, setPage] = useState(1);
  const [last, setLast] = useState(5);
  const [sub, setSub] = useState(0);
  const itemsPerPage = 5;
  const resultLength = result.number;
  const [newArr, setNewArr] = useState(result["results"].slice(0, 5));

  const pageTotal = Math.ceil(resultLength / itemsPerPage);

  const nextPage = () => {
    if (last + 5 <= resultLength) {
      setLast(last + 5);
      setSub(sub + 5);
      setNewArr(result["results"].slice(sub + 5, last + 5));
    } else {
      setLast(last);
      setSub(sub);
    }
    if (page < pageTotal) setPage(page + 1);
  };
  const prevPage = () => {
    if (last > 5) {
      setLast(last - 5);
      setSub(sub - 5);
      setNewArr(result["results"].slice(sub - 5, last - 5));
    } else setLast(last);
    if (page > 1) setPage(page - 1);
    else {
      setLast(last);
      setSub(sub);
    }
  };

  return (
    <div className="content-body">
      <div className="content-inner">
        <h1>
          Results for: {search}
          <br />
          {resultLength}results
        </h1>

        {newArr.map(({ title }, index) => (
          <h5 key={index}>{title}</h5>
        ))}

        <button onClick={prevPage}> ↤ </button>
        {page}
        <button onClick={nextPage}> ↦ </button>
      </div>
    </div>
  );
}

export default Content;
