import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid place-items-center mb-14 px-4">
        <h1
          className="
      text-4xl sm:text-5xl 
      font-light 
      text-black       
      tracking-wide 
      max-w-xl 
      text-center 
      leading-[1.3]       
      drop-shadow-sm     
      whitespace-pre-line
    "
          style={{
            paddingBottom: "0.3em",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Product Listing
        </h1>
      </div>

      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div key={p.id} className="card-hover">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
