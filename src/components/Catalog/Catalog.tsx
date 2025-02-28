import { useFetch } from "../../hooks/useFetch";
import { useState, useCallback, useEffect } from "react";
import { CatalogLoader } from "../../loaders/CatalogLoader";
import { Section } from "../Section/Section";
import { CatalogContent } from "./CatalogContent/CatalogContent";
import { CatalogNav } from "./CatalogNav/CatalogNav";
import { MoreButton } from "./MoreButton/MoreButton";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/state/store";
import classes from "./catalog.module.css";

type ProductProps = {
  id: number;
  images: string;
  title: string;
  price: number;
};

type CategoryProps = {
  id: number;
  title: string;
};

export const Catalog = () => {
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const searchValue = useSelector((state: RootState) => state.search.value);

  const url = import.meta.env.VITE_HOST;
  const { data: categories, loading: categoriesLoading } = useFetch<
    CategoryProps[]
  >(`${url}/api/categories`);

  const apiUrl = `${url}/api/items?${
    categoryId ? `categoryId=${categoryId}&` : ""
  }${searchValue ? `q=${searchValue}&` : ""}offset=${offset}`;


  const { data: newProducts, loading: productsLoading } =
    useFetch<ProductProps[]>(apiUrl);

  useEffect(() => {
    setProducts([]);
    setOffset(0);
    setHasMore(false);
  }, [categoryId, searchValue]);

  useEffect(() => {
    if (newProducts) {
      console.log("Получены новые товары:", newProducts);
      setProducts((prev) => [...prev, ...newProducts]);
      setHasMore(newProducts.length === 6);
    }
  }, [newProducts]);

  const loadMoreItems = async () => {
    if (loadingMore || !hasMore) {
      return;
    }
    setLoadingMore(true);
    const nextOffset = offset + 6;
    console.log(" Загружаем еще товары, новый offset:", nextOffset);

    try {
      const response = await fetch(
        `${url}/api/items?${categoryId ? `categoryId=${categoryId}&` : ""}${
          searchValue ? `q=${searchValue}&` : ""
        }offset=${nextOffset}`
      );
      if (!response.ok) {
        throw new Error("Ошибка при загрузке товаров");
      }
      const moreItems: ProductProps[] = await response.json();

      setHasMore(moreItems.length === 6);
      setOffset(nextOffset);
    } catch (error) {
      console.error("Ошибка при загрузке товаров:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  const handleCategoryChange = useCallback((id: number | null) => {
    console.log("🛒 Выбрана категория:", id);
    setCategoryId(id);
    setOffset(0);
  }, []);

  return (
    <div className={classes["catalog-container"]}>
      <Section title="Каталог">
        {!categoriesLoading && categories && (
          <CatalogNav
            categories={categories}
            onCategoryChange={handleCategoryChange}
          />
        )}
        {productsLoading ? (
          <CatalogLoader />
        ) : (
          <>
            <CatalogContent data={products} />
            {hasMore && (
              <MoreButton
                loadMoreItems={loadMoreItems}
                loading={loadingMore}
                hasMore={hasMore}
              />
            )}
          </>
        )}
      </Section>
    </div>
  );
};
