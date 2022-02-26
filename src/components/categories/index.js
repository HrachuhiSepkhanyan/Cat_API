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

    return ( <
        div className = "" >
        <
        Link to = { "/" }
        className = "" >
        <
        div className = "" >
        <
        label className = "" > random < /label>{" "} <
        /div>{" "} <
        /Link>{" "} {
            categories &&
                categories.map((item) => ( <
                    Link to = { "/categories/" + item.id }
                    key = { item.id }
                    className = "" >
                    <
                    div className = "" >
                    <
                    label className = "" > { item.name } < /label>{" "} <
                    /div>{" "} <
                    /Link>
                ))
        } { " " } <
        /div>
    );
};

export default Categories;