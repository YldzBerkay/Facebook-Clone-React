import React from "react";
import {FaSearch} from "react-icons/fa";
import {MdMoreHoriz} from "react-icons/md";

function LeftArea() {
    return (
        <div className="Lside">
        <div className="Contact">
          <div className="Contacts">Contacts</div>

          <div className="chaticon">
            <div className="icons">
              <FaSearch fontSize="1.2rem" />
            </div>
            <div className="icons">
              <MdMoreHoriz fontSize="1.2rem" />
            </div>
          </div>
        </div>
        <div className="concise">
          <div className="Profilee">
            <img
              src="https://media.licdn.com/dms/image/C5603AQHFQKQX2U3QLA/profile-displayphoto-shrink_800_800/0/1632746426793?e=1689811200&v=beta&t=iY13uQjVjvfqayP9VPm5ql1SO7HHCO8kobvC834M6NA"
              alt="logo"
            />
            <div className="ProfileeText">Yağız Yazıcı</div>
          </div>
          <div className="Profilee">
            <img
              src="https://media.licdn.com/dms/image/C4D03AQFc6BYyaTWikw/profile-displayphoto-shrink_800_800/0/1664260634809?e=1689811200&v=beta&t=YCfIfOKMSl-xyvvAv0Lik5ZU6qU8SjsD6aGKwy-oIY8"
              alt="logo"
            />
            <div className="ProfileeText">Mualla Çakmaz</div>
          </div>
          <div className="Profilee">
            <img src="https://media.licdn.com/dms/image/C4D03AQENkS4fcLq7bw/profile-displayphoto-shrink_800_800/0/1659360093763?e=1689811200&v=beta&t=uDkwa4gKE-CnsVLsRrspiqel2Mrra9g7aUFFvKLplHA" alt="logo" />
            <div className="ProfileeText">Selin Akar</div>

          </div>
          <div className="Profilee">
            <img src="https://media.licdn.com/dms/image/D4D03AQFQFDhX1zyYWA/profile-displayphoto-shrink_800_800/0/1680696266940?e=1689811200&v=beta&t=0bnWzHSNznrUIuPbLRzBR55x1NIDGfstrE26Kl0RiY8" alt="logo" />
            <div className="ProfileeText">İlayda Özkan</div>

          </div>
          <div className="Profilee">
            <img src="https://media.licdn.com/dms/image/C5603AQG_JycgvNEqJQ/profile-displayphoto-shrink_800_800/0/1636183627628?e=1689811200&v=beta&t=namoPvDBzWK8XIuDBEYHWABCoZJfrukOaI5XRLJ50mI" alt="logo" />
            <div className="ProfileeText">Berk Üstüner</div>

          </div>
        </div>
      </div>
        );
}

export default LeftArea;