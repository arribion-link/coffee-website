import { HiArrowLongRight } from "react-icons/hi2";
import banner_img from "../../../assets/banner-img1.png"
const Banner = () => {
  return (
      <section className="mx-4 my-[10em] ">
      <div className="grid md:grid-cols-2 bg-pink-200 rounded-2xl p-4 min-h-[40vh] relative ">
        <div className="">
          <h1 className="text-[clamp(1em,7vw,2.5em)] font-bold text-amber-950 ">
            Check out our <br /> best coffee beans
          </h1>
          <button className="my-4 text-white bg-amber-950 py-1 px-4 rounded-4xl flex gap-6 items-center">
            Explore our Product
            <HiArrowLongRight />
          </button>
        </div>
        <div>
          <img src={banner_img} alt="" className="absolute -bottom-32 md:-bottom-5 max-w-[27em] right-0 md:right-25" />
        </div>
      </div>
    </section>
  );
}

export default Banner
