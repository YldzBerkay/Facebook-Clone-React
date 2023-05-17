import React from "react";
import {
    FaMedrt,
    FaFontAwesomeFlag,
    FaFacebookMessenger,
    FaAngleDown,
    FaUserFriends,
  } from "react-icons/fa";

function RightArea(){
    return(
        <div className="Rside">
        <div className="Profile">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUolWPtYATiwWEwGVKRkVbfdX7vqwX-hSvRg&usqp=CAU"
            alt="dp"
          />
          <div className="RsideText">Berkay Arda Yıldız</div>
        </div>
        <div className="Pro">
          <FaUserFriends color="blue" fontSize="2rem" />
          <div>Friends</div>
        </div>
        <div className="Pro">
          <FaFontAwesomeFlag color="green" fontSize="2rem" />
          <div>Pages</div>
        </div>
        <div className="Pro">
          <FaMedrt color="blue" fontSize="2rem" />
          <div>COVID-19 Information Center</div>
        </div>
        <div className="Pro">
          <FaFacebookMessenger color="green" fontSize="2rem" />
          <div>Messenger Kids</div>
        </div>

        <div className="Pro">
          <FaAngleDown color="green" fontSize="2rem" />
          <div>See More</div>
        </div>
        <div className="linePro"></div>
        <div className="Profiles">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            alt="logo"
          />
          <div>React Developer</div>
        </div>
        <div className="Profiles">
          <img
            src="https://www.datocms-assets.com/45470/1631026680-logo-react-native.png"
            alt="logo"
          />
          <div>React Native Developer</div>
        </div>
        <div className="Profiles">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
            alt="logo"
          />
          <div>JavaScript Developer</div>
        </div>
        <div className="Profiles">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png"
            alt="logo"
          />
          <div>Python Developer</div>
        </div>
        <div className="Pross">
          <FaAngleDown color="blue" fontSize="2rem" />
          <div>See More</div>
        </div>
      </div>

        )

}

export default RightArea;