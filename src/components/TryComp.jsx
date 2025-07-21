import { useQuery } from '@tanstack/react-query';

const fetchProducts = async () => {
  const res = await fetch('http://127.0.0.1:3000/products');
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

const TryComp = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map(product => (
        <li key={product.id}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
};

export default TryComp;
