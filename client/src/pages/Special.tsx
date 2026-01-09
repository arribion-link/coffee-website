import ProductCard from "../components/productCards/ProductCard";
import Cta from "../components/specialOfferComponents/callToAction/Cta";
import SpecialOfferHeader from "../components/specialOfferComponents/header/SpecialOfferHeader";
const Special = () => {
  return (
    <>
      <section className="min-h-[45vh]">
        <div className=" text-center mb-8">
          <h1 className="text-[clamp(2em,5vw,3em)] font-bold text-amber-950 ">
            Get Your Special Offer all Premium.
          </h1>
          <p>
            We offer special pricing for our customers who are one and above.
          </p>
          {/* <h1>Become one of us today <HiArrowRight/> </h1> */}
        </div>
        <SpecialOfferHeader />
      </section>

      <section className="min-h-[50vh] mb-20 mx-4">
        <div className="my-4">

        <h1 className="text-2xl font-bold text-center text-amber-800">Today Special Offers</h1>
        </div>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <Cta/>
      </section>
    </>
  );
}

export default Special
