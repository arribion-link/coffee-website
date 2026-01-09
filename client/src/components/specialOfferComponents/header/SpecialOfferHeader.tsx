import premium_coffee from "../../../assets/prem-coffee.png"
import coffee_grain from "../../../assets/grain.png"
const SpecialOfferHeader = () => {
  return (

    <div className="bg-amber-800 rounded p-4 min-h-[20em] relative flex justify-center mx-4">
      <div>
        <img src={premium_coffee} alt="" className="max-w-[18em]" />
        <img src={coffee_grain} alt="" className="max-w-[15em] absolute -top-10 right-0" />
      </div>
    </div>
  )
}

export default SpecialOfferHeader
