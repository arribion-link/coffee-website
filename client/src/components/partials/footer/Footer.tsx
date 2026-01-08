import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const privacies = ["Terms of use", "Privacy policy", "Cookies"];
    const abouts = ["Find a location", "About us", "Our story"];
    const servicies = ["Shop", "Order ahead", "menu"];
    const information = ["Plans & Pricing", "Jobs", "Selling our product"];
  return (
    <footer className="bg-amber-950 min-h-[40vh] relative text-white rounded-t">
      <div className="grid grid-cols-5 p-5">
        <div>
          <h2 className="text-2xl"> Privecy</h2>
          <ul>
            {privacies.map((privecy) => (
              <li key={privecy} className="text-slate-300">
                {" "}
                {privecy}{" "}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl">About</h2>
          <ul>
            {abouts.map((about) => (
              <li key={about} className="text-slate-300">
                {" "}
                {about}{" "}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl">Services</h2>
          <ul>
            {servicies.map((service) => (
              <li key={service} className="text-slate-300">
                {" "}
                {service}{" "}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl">Information</h2>
          <ul>
            {information.map((info) => (
              <li key={info} className="text-slate-300">
                {" "}
                {info}{" "}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl">Social Media</h2>
          <div className="flex gap-4">
            <FaFacebook size={20} className="hover:text-blue-500" />
            <FaTwitter size={20} className="hover:text-slate-500" />
            <FaYoutube size={20} className="hover:text-red-700" />
            <FaInstagram size={20} className="hover:text-pink-500" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between bg-amber-900 absolute bottom-0 p-3">
        <div>
          <p>Copyright &copy; {new Date().getFullYear()} coffee Point</p>
        </div>
        <div>
          <Link to="/">Support</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer
