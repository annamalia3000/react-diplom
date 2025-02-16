import { Banner } from "../../components/Banner/Banner";
import { Catalog } from "../../components/Catalog/Catalog";
import { TopSales } from "../../components/TopSales/TopSales";
import { TopSalesLoader } from "../../loaders/TopSalesLoader";

export const Home = () => {
  return (
    <>
      <Banner img="/img/banner.jpg" title="К весне готовы!" />
      <TopSales loader={TopSalesLoader}/>
      <Catalog />
    </>
  );
};
