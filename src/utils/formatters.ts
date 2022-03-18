import { sanityBuilder } from "../lib/db";

export function formatPrice(price: number): string {
  return price == 0 ? "Free" : `$${price / 100}`;
}

export function urlFor(source) {
  return sanityBuilder.image(source);
}
