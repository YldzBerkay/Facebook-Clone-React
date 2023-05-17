import React from "react";

import { MdVideoCall } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import { FaGrin } from "react-icons/fa";


function FeelArea() {
    return (
        <div className="text">
            <div className="Post">
              <img src="https://media.licdn.com/dms/image/C4D03AQH2kADncvbaxg/profile-displayphoto-shrink_800_800/0/1652256214819?e=2147483647&v=beta&t=CuDIwtvsC9MivmjVX7sNWSW0xygWpzK9Pw5Ee8EFAz4" alt="PIC" />
              <input type="Mind" placeholder="What's on your mind, Berkay?" />
            </div>
            <div className="linePro2"></div>

            <div className="Call">
              <div className="ico">
                <div className="icone">
                  <MdVideoCall fontSize="2rem" color="red" />
                  <div>LiveVideo</div>
                </div>
                <div className="icone">
                  <AiFillFileImage fontSize="2rem" color="green" />
                  <div>Photo/Video</div>
                </div>
                <div className="icone">
                  <FaGrin fontSize="2rem" color="orange" />
                  <div>Felling/activity</div>
                </div>
              </div>
            </div>
          </div>
    );
}

export default FeelArea;