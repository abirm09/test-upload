import { useEffect, useState } from "react";

const Pagination = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPage = Math.ceil(totalProduct / itemPerPage);
  totalProduct /
    useEffect(() => {
      fetch("http://localhost:5000/menu/count")
        .then(res => res.json())
        .then(data => setTotalProduct(data["available-menu"]));
    }, []);
  const itemsPerPage = [5, 7, 10];
  const pageButton = [...Array(totalPage).keys()];
  const handleCurrentPage = currentPage => {
    setCurrentPage(currentPage);
  };
  console.log(currentPage, itemPerPage);
  const handleChange = event => {
    setItemPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/menu?skip=${currentPage}&limit=${itemPerPage}`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, [currentPage, itemPerPage]);
  return (
    <section className="max-w-7xl mx-auto px-auto">
      <div>
        <div>
          <div className="btn-group">
            {pageButton.map((btn, index) => (
              <button
                className="btn"
                key={index}
                onClick={() => handleCurrentPage(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
        <div>
          <select
            name="number of content"
            className="select"
            onChange={handleChange}
          >
            {itemsPerPage.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
