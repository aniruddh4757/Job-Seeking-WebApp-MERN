import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Aniruddh Ghewade</div>
      <div>
        <Link to={"https://www.facebook.com/aniruddh.ghewade/"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/channel/UCs4VOHZzz5O3dPe-LEZGBdA"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/aniruddh-ghewade-291a6525a/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/ig_aniruddh47/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;