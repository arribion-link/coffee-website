// import React from 'react'

import ProductCard from "../../productCards/ProductCard";
import Categories from "./Categories";

const Special = () => {
  return (
    <section className="mx-4">
      <div className="my-6">
        <h1 className="text-[clamp(1.5em,7vw,3em)] text-center font-bold text-amber-800">
          <span className="text-amber-950">Weekend </span> special products
        </h1>
        <p className="text-center">
          Check out our daily special product that you can get with + %20 OFF!
        </p>
      </div>
      <Categories />
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default Special;
