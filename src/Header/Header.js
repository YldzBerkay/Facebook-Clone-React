import React from "react";
import "./Header.css";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineWallet
} from "react-icons/ai";
import { FaBell, FaFacebookMessenger, FaPlusCircle, FaRegFlag, FaUsers} from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import MainArea from "../MainArea/MainArea.js";


function Header() {
  return (
    <div className="homePage">
      <div className="header">
        <div className="firstHeader">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
              alt="facebook logo"
            />
          </div>
          <div className="search">
            <AiOutlineSearch className="searchIcon" />
            <input className="searchBar" type="Search" placeholder="Search Facebook" />
          </div>
        </div>
        <div className="secondHeader">
          <div className="iconSecondHeader">
            <AiFillHome className="iconSecond" id="iconHome" />
          </div>
          <div className="iconSecondHeader">
            <FaRegFlag className="iconSecond" />
          </div>
          <div className="iconSecondHeader">
            <MdOndemandVideo className="iconSecond" />
          </div>
          <div className="iconSecondHeader">
            <FaUsers className="iconSecond" />
          </div>
          <div className="iconSecondHeader">
            <AiOutlineWallet className="iconSecond"/>
          </div>
        </div>


        <div className="thirdHeader">
          <div className="iconThirdHeader">
            <FaPlusCircle className="iconThird" id="iconPlusCircle"/>
          </div>
          <div className="iconThirdHeader">
            <FaFacebookMessenger className="iconThird" />
          </div>
          <div className="iconThirdHeader">
            <FaBell className="iconThird" />
          </div>
          <div className="iconThirdHeader">
            <img src="https://media.licdn.com/dms/image/C4D03AQH2kADncvbaxg/profile-displayphoto-shrink_800_800/0/1652256214819?e=2147483647&v=beta&t=CuDIwtvsC9MivmjVX7sNWSW0xygWpzK9Pw5Ee8EFAz4" alt="profile" />
          </div>
        </div>
      </div>
      <MainArea />
    </div>
  );
}

export default Header;
