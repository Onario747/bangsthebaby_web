import { FaFacebook, FaInstagram, FaSpotify, FaTiktok } from "react-icons/fa";

const SocialBar = () => {
  return (
    <div className="border rounded-full p-2 flex items-center gap-3 w-fit mx-auto bottom-0">
      <FaFacebook className="cursor-pointer" />
      <FaInstagram className="cursor-pointer" />
      <FaSpotify className="cursor-pointer" />
      <FaTiktok className="cursor-pointer" />
    </div>
  );
};

export default SocialBar;
