import ProductCard from "./ProductCard";

const Hero = () => {

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/25 via-black to-purple-900/30 "/>
      <div className="container mx-auto px-4 relative z-10">
        <ProductCard/>
      </div>
    </section>
  );
}

export default Hero;