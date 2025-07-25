import ProductImage from "./ProductImage";
import shirt1 from "../assets/shirt.webp"
import shirt2 from "../assets/shirt.webp"
import shirt3 from "../assets/shirt.webp"
import shirt4 from "../assets/shirt.webp"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

  const fetchProducts = async() => {
    const response = await axios.get("http://127.0.0.1:3000/products")
    return response.data;
  }

  const formatCOP = (value) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(value);
  };

const ProductCard = () => {

  const { data, error, isLoading } = useQuery ({
    queryKey: ["products"],
    queryFn: fetchProducts
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = [
    {
      id: 1,
      name: "Camiseta Algodón",
      description: "Estampado revolucionary",
      price: "30.000",
      rating: 4.8,
      imageSrc: shirt1
    },
    {
      id: 2,
      name: "Camiseta Algodón",
      description: "Estampado revolucionary",
      price: "30.000",
      rating: 4.9,
      imageSrc: shirt1
    },
    {
      id: 3,
      name: "Camiseta Algodón",
      description: "Estampado revolucionary",
      price: "30.000",
      rating: 4.7,
      imageSrc: shirt1
    },
    {
      id: 4,
      name: "Camiseta Algodón",
      description: "Estampado revolucionary",
      price: "30.000",
      rating: 4.6,
      imageSrc: shirt1
    },
  ];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {data.map((product) => (
        <div
          key={product.id}
          className=" group rounded-xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm"
        >
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-pink-800/10 to-purple-900/10">
            <ProductImage src={product.image_src} alt={product.name} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300" />
          </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold group-hover:text-pink-300 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {product.description}
                </p>
              </div>
              <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {formatCOP(product.price)}
                  </span>
                </div>
              </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
        
