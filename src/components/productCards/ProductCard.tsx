import { HiArrowLongRight } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
// import { useState } from "react";
// import { FaHeart } from "react-icons/fa";
const ProductCard = () => {
  // const [like, setLike] = useState(false);
  // const handleLike = () => {
  //   setLike(like);
  // }
  return (
    <div className="bg-slate-50 relative rounded-2xl p-4 shadow">
      <div className="absolute right-0 bg-amber-800  text-white rounded-l-2xl px-4 py-2 top-10">
        % 20
      </div>
      <img src="" alt="" className="min-h-[15em] " />
      <div className="text-center">
        <p className="text-slate-500">Tagname</p>
        <h2 className="text-3xl">Spice Iceland Blend</h2>
        <h3 className="text-2xl">
          $ <span>12</span>
        </h3>
        <div className="flex justify-between my-3 items-center">
          <div>
            <p className="flex gap-6 items-center">
              Add to cart <HiArrowLongRight size={25} />
            </p>
          </div>
          <IoHeartOutline/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
