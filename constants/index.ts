
import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://example.com/image1.jpg",
    discount: "",
    description: "A luxurious villa with ocean view and modern amenities.",
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image1-1.jpg",
      "https://example.com/image1-2.jpg"
    ],
    reviews: [
      {
        name: "Alice",
        avatar: "https://example.com/avatar1.jpg",
        rating: 5,
        comment: "Amazing stay, highly recommend!"
      },
      {
        name: "Bob",
        avatar: "https://example.com/avatar2.jpg",
        rating: 4,
        comment: "Great location, beautiful villa."
      }
    ]
  },
];
