export type SizesProps = {
    size: string;
    available: boolean;
  };
  
export type DataProps = {
    title: string;
    price: number;
    images: string[];
    sku: number;
    manufacturer: string;
    color: string;
    material: string;
    season: string;
    reason: string;
    sizes: SizesProps[];
  };

  export type ItemCartProps = {
    title: string;
    price: number;
    id: number;
    size: string;
    count: number;
  };