import React from "react";
import logo from "../img/XPO-Logo.svg";
import hero from "../img/hero.jpg";

const headerStyle = {
  backgroundImage: `url(${hero})`,
  clipPath: "polygon(100% 44%, 100% 82%, 0 100%, 0 0, 100% 0)",
};

const Header = () => {
  return (
    <div className="h-screen bg-cover bg-top relative" style={headerStyle}>
      <div class="flex">
        <div class="flex-auto text-center px-5 py-5 m-2">
          <img className="h-10" src={logo} alt="XPO Logo"></img>
        </div>

        <div class="flex-auto text-right px-5 py-5 m-2">
          <ul className="block list-none text-white">
            <li className="inline-block ml-20">
              <a href="#">Our Work</a>
            </li>
            <li className="inline-block ml-20">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-white font-sans absolute mt-40 ml-40 text-left">
        <h1 className="mb-12">
          {/* <span style={headingMain} className="block text-6xl font-semibold">XPO</span> */}
          <span className="inline text-6xl font-semibold tracking-wider leading-none">
            Welcome to our
            <br />
            award-winning
            <br />
            retail impact
            <br />
            agency.
          </span>
        </h1>

        <a href="#" class="text-white font-bold py-2 px-4 border-2">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Header;
