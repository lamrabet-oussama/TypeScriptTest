function identity<Type>(val: Type): Type {
  return val;
}
interface Bootle {
  brand: string;
  type: number;
}

let b: Bootle = identity<Bootle>({ brand: "test", type: 12 });
function getSearchProducts<T>(products: T[], index: number): T {
  return products[index];
}

const getMore = <T>(products: T[]): T => {
  return products[5];
};
