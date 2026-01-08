import { useState } from "react";

const ProductDropDown = () => {
  const products = ["Coffe Beans", "Blends", "Coffe Makers Machines", "Grinded coffee", "coffee"];
 const [ ,setOpen] = useState(true);
  return (
    <div className="absolute bg-slate-100 p-2 rounded shadow-xl top-5 min-w-[15em]">
      <ul>
        {
          products.map((product) => (
            <li
              onClick={()=>setOpen(false)}
              key={product}
              className="hover:bg-amber-900 m-1 hover:text-white py-1 px-4 w-full rounded"
            >{product}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProductDropDown
