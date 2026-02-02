import header_img from "../../assets/process-header1.png"
const Header = () => {
  return (
    <section className="min-h-[50vh] flex justify-center">
          <div>
             <img src={header_img} alt="" className="max-w-[30em]" /> 
        </div>
    </section>
  );
}

export default Header
