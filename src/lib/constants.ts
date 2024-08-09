export const products = [
  {
    id: 1,
    name: "Widget",
    category: "Gadgets",
    price: 19.99,
    quantity: 120,
    image: "https://avatar.iran.liara.run/public/1",
  },
  {
    id: 2,
    name: "Gizmo",
    category: "Gadgets",
    price: 24.99,
    quantity: 80,
    image: "https://avatar.iran.liara.run/public/2",
  },
  {
    id: 3,
    name: "Thingamajig",
    category: "Tools",
    price: 9.99,
    quantity: 200,
    image: "https://avatar.iran.liara.run/public/3",
  },
  {
    id: 4,
    name: "Doodad",
    category: "Accessories",
    price: 14.99,
    quantity: 150,
    image: "https://avatar.iran.liara.run/public/4",
  },
  {
    id: 5,
    name: "Doohickey",
    category: "Tools",
    price: 29.99,
    quantity: 50,
    image: "https://avatar.iran.liara.run/public/5",
  },
  {
    id: 6,
    name: "Whatchamacallit",
    category: "Gadgets",
    price: 39.99,
    quantity: 60,
    image: "https://avatar.iran.liara.run/public/6",
  },
  {
    id: 7,
    name: "Thingummy",
    category: "Accessories",
    price: 12.99,
    quantity: 90,
    image: "https://avatar.iran.liara.run/public/7",
  },
  {
    id: 8,
    name: "Contraption",
    category: "Tools",
    price: 34.99,
    quantity: 30,
    image: "https://avatar.iran.liara.run/public/8",
  },
  {
    id: 9,
    name: "Gadget",
    category: "Gadgets",
    price: 49.99,
    quantity: 70,
    image: "https://avatar.iran.liara.run/public/9",
  },
  {
    id: 10,
    name: "Device",
    category: "Gadgets",
    price: 59.99,
    quantity: 40,
    image: "https://avatar.iran.liara.run/public/10",
  },
  {
    id: 11,
    name: "Apparatus",
    category: "Tools",
    price: 44.99,
    quantity: 100,
    image: "https://avatar.iran.liara.run/public/11",
  },
  {
    id: 12,
    name: "Implement",
    category: "Accessories",
    price: 22.99,
    quantity: 110,
    image: "https://avatar.iran.liara.run/public/12",
  },
];

export const adjustedPriceFunc = (price: number, quantity: number) => {
  return (price * Math.log(quantity + 1)) / Math.log(price + quantity + 1);
};

export const sortOptions = [
  { value: "price", label: "Price" },
  { value: "adjustedPrice", label: "Adjusted Price" },
  { value: "quantity", label: "Quantity" },
];

export const sortOrderOptions = [
  { value: "", label: "Sort Order" },
  { value: "asc", label: "Ascending" },
  { value: "desc", label: "Descending" },
];
