import offerDataSet from "./offers.json";
import type { Offer } from "./offer.type";

export function getOffers(): Offer[] {
   return offerDataSet.offers;
}

export function getOffer(slug: string): Offer | undefined {
   return offerDataSet.offers.find((offer) => offer.slug === slug);
}
