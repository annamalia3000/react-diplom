import { useState } from "react";
import { Catalog } from "./components/Catalog/Catalog";
import { Search } from "../../components/Search/Search";
import classes from "./catalogPage.module.css";


export const CatalogPage = () => {
  const [, setVisible] = useState<boolean>(false)
  
  return (
    <div className={classes["catalog-page-container"]}>
      <Search className={classes["search-catalog"]} setVisible={setVisible} />
      <Catalog />
    </div>
  )
}


