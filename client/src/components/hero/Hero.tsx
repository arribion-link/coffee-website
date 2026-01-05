import { HiArrowLongRight } from "react-icons/hi2";
import hero from "../../assets/hero.png";
const Hero = () => {
  return (
    <section className="min-h-screen ml-4">
      <div className="grid gap-6  grid-cols-2">
        <div>
          <h1 className="text-[clamp(2em,7vw,5em)] font-bold text-amber-950 ">
            COFFEE POINT
          </h1>
          <h2 className="text-[clamp(2em,7vw,3em)] font-bold text-amber-950 ">
            An Online Coffee Store
          </h2>
          <p className=" text-amber-950 mt-4">
            Straight to your doorstep. We don't our roast beans untill we have
            an order. Every order is roasted and shipped the same day.
          </p>
          <div className="my-4 flex gap-8">
            <button className="text-white bg-amber-950 py-1 px-4 rounded-4xl flex gap-6 items-center">
                Explore our Product
                <HiArrowLongRight/>
            </button>
            <button className="text-amber-950 font-bold">
              sign in / sign up
            </button>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <h3>Our Products</h3>
              <p>+ 27</p>
            </div>
            <div>
              <h3>Our Sales</h3>
              <p>+ 1230</p>
            </div>
          </div>
        </div>
        <div className="relative bg-slate-100 rounded-l-2xl">
          <img
            src={hero}
            alt=""
            className="max-w-[50em] absolute right-0 -top-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
