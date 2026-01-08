import ProductCard from "../../productCards/ProductCard";

const Recent = () => {
  return (
    <section className="mx-4 my-[6em] min-h-[80vh] ">
      <div className="my-[4em] ">
        <h1 className="text-[clamp(1.5em,7vw,3em)] text-center font-bold text-amber-800">
          Explore the recent products.
        </h1>
        <p className="text-center">
          Our delectable drink options, including classic espresso choices,
          house specialities, fruit smooties and frozen treats.
        </p>
      </div>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default Recent;
