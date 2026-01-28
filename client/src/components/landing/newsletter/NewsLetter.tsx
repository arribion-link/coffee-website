import grain_img1 from "../../../assets/grain.png"
import grain_img2 from "../../../assets/grain1.png"
const newsletter = () => {
  return (
    <section className="mx-4 my-[5em] ">
      <div className=" bg-pink-200 rounded-2xl p-4 min-h-[40vh] relative">
        <img src={grain_img1} alt="" className="absolute hidden md:block max-w-[18em] left-0 -top-15 " />
        <div className="">
          <h1 className="text-[clamp(1em,7vw,2.5em)] text-center font-bold text-amber-950 ">
            Join in and get % 20 OFF!
        </h1>
        <p className="text-center">Subscribe to our newsletter and get %20 OFF code.</p>
        <div className="flex justify-center">
            <form action="" className="bg-pink-100 py-2 px-4 rounded-3xl">
                <label htmlFor="email"></label>
                <input type="email" placeholder="your email" />
                <input type="submit" />
            </form>
          </div>
        </div>
        <img src={grain_img2} alt="" className="absolute max-w-[25em] right-0 -bottom-15 " />
      </div>
    </section>
  );
};

export default newsletter;
