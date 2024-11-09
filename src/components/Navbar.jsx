import logo from "../assets/andonLafreniereLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (<nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-24"src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/andon-lafreniere-b41872306/"><FaLinkedin/></a>
        <a href="https://github.com/Andon-LaFreniere"><FaGithub/></a>
        <a href="https://x.com/AndonL32399"><FaSquareXTwitter/></a>
        <a href="https://www.instagram.com/andon.lafreniere/"><FaInstagram/></a>

    </div>

  </nav>
  );

};

export default Navbar;
