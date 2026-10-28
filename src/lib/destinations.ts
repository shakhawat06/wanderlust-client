export type DestinationCategory =
  | "beach"
  | "mountain"
  | "adventure"
  | "cultural"
  | "desert";

export interface Destination {
  id: string;
  title: string;
  location: string;
  category: DestinationCategory;
  pricePerPerson: number;
  duration: string;
  rating: number;
  image: string;
  imageAlt: string;
}



