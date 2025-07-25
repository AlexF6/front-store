import ProductCard from "./ProductCard";

const Hero = () => {

  return (
    <section className="py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-purple-900/10 "/>
      <div className="container mx-auto px-4 relative z-10">
        <ProductCard/>
      </div>
    </section>
  );
}

export default Hero;