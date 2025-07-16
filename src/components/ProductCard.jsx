const ProductCard = ({ product }) => {
  const { name, description, price, imageSrc } = product;

  return (
    <div className="bg-white text-black rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform">
      <img src={imageSrc} alt={name} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-sm mb-4">{description}</p>
        <span className="text-rose-500 font-semibold">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;