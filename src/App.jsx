import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [filter, setFilter] = useState(null); // State to hold the filter category

  // Fetch data from the server
  const getMyPostData = async () => {
    try {
      const res = await axios.get("");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  // Filter items based on category
  const filterItems = (category) => {
    setFilter(category === "all" ? null : category); // Update the filter state. If "All" is selected, set filter to null
  };

  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <>
      <h1>Axios Tutorial</h1>

      <button
        type="button"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium bg-slate-400 "
        onClick={() => filterItems("all")} // Change here to handle "All" button
      >
        All
      </button>

      <button
        type="button"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium bg-slate-400 "
        onClick={() => filterItems("engineering")}
      >
        Engineering
      </button>

      <button
        type="button"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium bg-slate-400 "
        onClick={() => filterItems("science")}
      >
        Science
      </button>

      <button
        type="button"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium bg-slate-400 "
        onClick={() => filterItems("management")}
      >
       Management
      </button>

      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid grid-cols-2 md:grid-cols-4 mx-10 md:mx-24 gap-10 gap mt-10">
        {myData
          .filter((post) => !filter || post.categoryy === filter) // Filter based on selected category
          .map((post) => {
            const { title, price, id, img, category } = post;
            return (
              <div key={id} className="card">
                <img src={img} alt="" className="h-60 w-60" />
                <h2>{title}</h2>
                <p>{price}</p>
             
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;
