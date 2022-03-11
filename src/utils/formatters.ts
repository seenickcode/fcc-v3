export function formatPrice(price: number): string {
  return price == 0 ? "Free" : `$${price / 100}`;
}
