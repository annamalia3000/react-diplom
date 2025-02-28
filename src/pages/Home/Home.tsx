import { Catalog } from "../../components/Catalog/Catalog";
import { TopSales } from "../../components/TopSales/TopSales";
import { TopSalesLoader } from "../../loaders/TopSalesLoader";

export const Home = () => {
  return (
    <>
      <TopSales loader={TopSalesLoader}/>
      <Catalog />
    </>
  );
};
