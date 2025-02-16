import { useFetch } from "../../hooks/useFetch";
import { useState, useCallback, useEffect } from "react";
import { CatalogLoader } from "../../loaders/CatalogLoader";
import { Section } from "../Section/Section";
import { CatalogContent } from "./CatalogContent/CatalogContent";
import { CatalogNav } from "./CatalogNav/CatalogNav";
import { MoreButton } from "./MoreButton/MoreButton";
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
  const [hasMore, setHasMore] = useState(true);

  const url = import.meta.env.VITE_HOST;
  const { data: categories, loading: categoriesLoading } = useFetch<
    CategoryProps[]
  >(`${url}/api/categories`);

  const apiUrl = categoryId
    ? `${url}/api/items?categoryId=${categoryId}`
    : `${url}/api/items`;

    const ofsetUrl= categoryId
    ? `${url}/api/items?categoryId=${categoryId}&offset=`
    : `${url}/api/items?offset=`;

  const { data: newProducts, loading: productsLoading } =
    useFetch<ProductProps[]>(apiUrl);

  useEffect(() => {
    setProducts(newProducts || []);
    setOffset(0);
    setHasMore(true);
  }, [categoryId]);

  useEffect(() => {
    if (newProducts) {
      setProducts(newProducts); 
    }
  }, [newProducts]);

  const loadMoreItems = async () => {
    if (loadingMore || !hasMore) {
      return;
    }
    setLoadingMore(true);
    try {
      const response = await fetch(`${ofsetUrl}${offset + 6}`);
      if (!response.ok) {
        throw new Error("Ошибка при загрузке товаров");
      }
      const moreItems: ProductProps[] = await response.json();

      setProducts((prev) => [...prev, ...moreItems]);
      setOffset((prev) => prev + 6);
      console.log(offset);

      if (moreItems.length < 6) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Ошибка при загрузке товаров:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  const handleCategoryChange = useCallback((id: number | null) => {
    setCategoryId(id);
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
            <MoreButton
              loadMoreItems={loadMoreItems}
              loading={loadingMore}
              hasMore={hasMore}
            />
          </>
        )}
      </Section>
    </div>
  );
};
