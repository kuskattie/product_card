import headphones from "../assets/products/headphones.jpeg";
import smartwatch from "../assets/products/smartwatch.jpeg";
import laptop from "../assets/products/laptop.jpeg";
import camera from "../assets/products/camera.jpeg";
import keyboard from "../assets/products/keyboard.jpeg";
import mouse from "../assets/products/mouse.jpeg";
import monitor from "../assets/products/monitor.jpeg";
import tablet from "../assets/products/tablet.jpeg";
import speaker from "../assets/products/speaker.jpeg";
import phone from "../assets/products/phone.jpeg";

// Product type
export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  variants: string[];
  available: boolean;
}

// Array of products with type annotations
export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99.99",
    image: headphones,
    variants: ["Black", "White", "Blue"],
    available: true
  },
  {
    id: 2,
    name: "Smartwatch",
    price: "$199.99",
    image: smartwatch,
    variants: ["Silver", "Gold"],
    available: false
  },
  {
    id: 3,
    name: "Laptop Pro 14”",
    price: "$1,299.00",
    image: laptop,
    variants: ["Space Gray", "Silver"],
    available: true
  },
  {
    id: 4,
    name: "Digital Camera",
    price: "$549.00",
    image: camera,
    variants: ["Black", "Red"],
    available: true
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: "$89.99",
    image: keyboard,
    variants: ["White", "Black"],
    available: false
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: "$59.99",
    image: mouse,
    variants: ["Black", "RGB"],
    available: true
  },
  {
    id: 7,
    name: "4K Monitor",
    price: "$399.99",
    image: monitor,
    variants: ["27-inch", "32-inch"],
    available: true
  },
  {
    id: 8,
    name: "Tablet X10",
    price: "$499.99",
    image: tablet,
    variants: ["Silver", "Gold", "Gray"],
    available: false
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: "$79.99",
    image: speaker,
    variants: ["Black", "Blue", "Red"],
    available: true
  },
  {
    id: 10,
    name: "Smartphone Ultra",
    price: "$899.99",
    image: phone,
    variants: ["Black", "Silver", "Purple"],
    available: true
  }
];

