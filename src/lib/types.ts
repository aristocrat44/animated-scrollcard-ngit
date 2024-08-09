export interface ProductProps {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
}

export interface AllProducts {
  items: ProductProps[];
}
