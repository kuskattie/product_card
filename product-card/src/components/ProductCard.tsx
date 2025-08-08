import type { Product } from "../data/products";
import { useState } from "react";

// Props type definition
interface ProductCardProps {
  product: Product;
}

/**
 * ProductCard Component
 * Displays product details including image, name, price, variants, and add-to-cart functionality.
 * Responsive design with Tailwind CSS.
 */
function ProductCard({ product }: ProductCardProps) {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart((prev) => !prev);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      {/* Product Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover"
        />
        {!product.available && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
            Out of Stock
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {product.name}
        </h3>
        <p className="text-xl font-bold text-green-600 mb-3">{product.price}</p>

        {/* Variant Selector */}
        <label className="text-sm text-gray-500 mb-1">Variants:</label>
        <select
          className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          disabled={!product.available}
        >
          {product.variants.map((variant, index) => (
            <option key={index} value={variant}>
              {variant}
            </option>
          ))}
        </select>

        {/* Add to Cart Button */}
        <button
          disabled={!product.available}
          onClick={handleAddToCart}
          className={`mt-auto py-2 px-4 rounded-lg text-white font-medium transition-colors duration-300 ${
            !product.available
              ? "bg-gray-400 cursor-not-allowed"
              : addedToCart
              ? "bg-green-600 hover:bg-green-700"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {!product.available
            ? "Out of Stock"
            : addedToCart
            ? "Added to Cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
