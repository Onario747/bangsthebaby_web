import { FaFacebook, FaInstagram, FaSpotify, FaTiktok } from "react-icons/fa";
import { SiAudiomack } from "react-icons/si";
import bangsIdika2 from "../assets/bangsIdika2.png";

const Hero = () => {
  return (
    <section className="max-container padding-x pt-[2rem] flex items-center w-full justify-around">
      <div>
        <h2 className="font-robotoCondensed text-[5rem] font-bold">
          They Call Me Bangs <br /> The Baby ..
        </h2>
        <div className="flex items-center gap-4 text-[2rem]">
          <a href="">
            <FaInstagram className="text-pink-600" />
          </a>
          <a href="">
            <FaFacebook className="text-blue-600" />
          </a>
          <a href="">
            <FaTiktok />
          </a>
          <a href="">
            <SiAudiomack className="text-yellow-600" />
          </a>
          <a href="">
            <FaSpotify className="text-green-600" />
          </a>
        </div>
      </div>
      <div className="w-fit h-fit">
        <img src={bangsIdika2} alt="bangs" className="w-[35rem] h-[22rem] object-cover block" />
      </div>
    </section>
  );
};

export default Hero;
