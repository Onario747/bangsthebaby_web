import { FaFacebook, FaInstagram, FaSpotify, FaTiktok } from "react-icons/fa";

const SocialBar = () => {
  return (
    <div className="border rounded-full p-2 flex items-center justify-center left-0 right-0 gap-3 w-fit fixed mx-auto bottom-0">
      <FaFacebook className="cursor-pointer" />
      <FaInstagram className="cursor-pointer" />
      <FaSpotify className="cursor-pointer" />
      <FaTiktok className="cursor-pointer" />
    </div>
  );
};

export default SocialBar;
