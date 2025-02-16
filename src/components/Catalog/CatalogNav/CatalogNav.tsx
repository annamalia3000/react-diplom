import { useState } from "react";
import classes from "./catalogNav.module.css";

type CatalogNavProps = {
  categories: { id: number; title: string }[];
  onCategoryChange: (categoryId: number | null) => void;
};

export const CatalogNav = ( {categories, onCategoryChange}: CatalogNavProps )=> {


  const allCategories = [{ id: 0, title: "Все" }, ...categories];

  const [activeCategory, setActiveCategory] = useState<number | null>(0);

  const handleCategoryClick = (categoryId: number) => {
    setActiveCategory(categoryId);
    onCategoryChange(categoryId === 0 ? null : categoryId);
  };

  return (
    <div className={classes["catalog-nav"]}>
      <ul className={classes["catalog-nav-items"]}>
        {allCategories.map((item) => (
          <li
            key={item.id}
            className={`${classes["catalog-nav-item"]} ${
              activeCategory === item.id ? classes["active"] : ""
            }`}
            onClick={() => handleCategoryClick(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
