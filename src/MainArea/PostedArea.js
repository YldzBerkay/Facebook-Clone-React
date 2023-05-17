import React from "react";
import { FaRegThumbsUp, FaCommentAlt, FaRegShareSquare } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";

function PostedArea() {
  return (
    <div className="Posted">
      <div className="poster">
        <div className="Simplilearn">
          <img
            src="https://avatars.githubusercontent.com/u/75256748?v=4"
            alt="Img"
          />
          <div className="SimplilearnText">
            <div className="simpleLearnText">Berkay Arda Yıldız</div>
            <div className="update"> 1d </div>
          </div>
        </div>
        <div className="edit">
          <MdMoreHoriz fontSize="1.5rem" />
        </div>
      </div>
      <div className="caption">
        Please Like, Comment and Subscribe to our YouTube Channel.
      </div>
      <div className="FacebookImg">
        <img
          src="https://media.licdn.com/dms/image/C4D03AQH2kADncvbaxg/profile-displayphoto-shrink_800_800/0/1652256214819?e=2147483647&v=beta&t=CuDIwtvsC9MivmjVX7sNWSW0xygWpzK9Pw5Ee8EFAz4"
          alt="Berkay Arda Yıldız"
          style={{ height: "auto", width: "100%" }}
        />
      </div>
      <div className="Comment">
        <div className="Like">
          <FaRegThumbsUp color="grey" />
          <div>Like</div>
        </div>
        <div className="Like">
          <FaCommentAlt color="grey" />
          <div>Comment</div>
        </div>
        <div className="Like">
          <FaRegShareSquare color="grey" />
          <div>Share</div>
        </div>
      </div>
    </div>
  );
}

export default PostedArea;
