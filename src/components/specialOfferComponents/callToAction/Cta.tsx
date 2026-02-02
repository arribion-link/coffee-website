import { HiArrowRight } from "react-icons/hi2"

const Cta = () => {
  return (
    <div className="flex justify-center my-[5em] bg-amber-800 text-white min-h-[40vh] rounded  ">
      <div>
        <h1 className="text-[clamp(2em,5vw,5em)] font-bold text-center">Get the benefits today</h1>
        <div className="flex justify-center">
          <button className="flex items-center gap-8 bg-slate-100 rounded py-1 px-4 font-semibold text-amber-800 group">
            Get Started <HiArrowRight size={25} className="transition-transform ease-in-out duration-1000 group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cta
