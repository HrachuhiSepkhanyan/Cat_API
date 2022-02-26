import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCats, getCatsByCategories } from "../../api/cat_API";
import CatsCard from "../cardCat/index";

const CatsBlok = () => {
  const { id } = useParams();

  const [cats, setCats] = useState(null);

  useEffect(() => {
    if (id) {
      getCatsByCategories({ id }).then((r) => {
        setCats(r.data);
      });
    } else {
      getCats().then((r) => {
        setCats(r.data);
      });
    }
  }, [id]);

  return (
    <div className="">
      <div className="">
        {" "}
        {cats &&
          cats.map((item, index) => <CatsCard key={index} cat={item} />)}{" "}
      </div>{" "}
    </div>
  );
};

export default CatsBlok;
