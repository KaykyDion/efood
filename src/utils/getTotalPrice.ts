import formatPrice from "./formatPrice";

export function getTotalPrice(items: Product[]) {
  return formatPrice(items.reduce((acc, item) => (acc += item.preco), 0));
}
