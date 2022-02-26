import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../api/cat_API";
import "./style.css";

const Categories = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    if (categories === null) {
      getCategories().then((r) => {
        setCategories(r.data);
      });
    }
  });

  return (
    <div className="menu">
      <Link to={"/"}>
        <div>
          <button className="random">
            <label> random </label>
          </button>
        </div>
      </Link>
      {categories &&
        categories.map((item) => (
          <Link
            to={"/categories/" + item.id}
            key={item.id}
            className="categories"
          >
            <button>
              <label> {item.name} </label>
            </button>
          </Link>
        ))}
    </div>
  );
};

export default Categories;
