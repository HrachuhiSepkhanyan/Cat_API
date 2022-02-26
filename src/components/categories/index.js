import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../api/cat_API";

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
    <div>
      <Link to={"/"}>
        <div>
          <label> random </label>
        </div>
      </Link>
      {categories &&
        categories.map((item) => (
          <Link to={"/categories/" + item.id} key={item.id}>
            <div>
              <label> {item.name} </label>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Categories;
