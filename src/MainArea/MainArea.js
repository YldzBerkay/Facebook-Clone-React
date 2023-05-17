import React from "react";
import "./MainArea.css";

import LeftArea from "./LeftArea";
import PostedArea from "./PostedArea";
import FeelArea from "./FeelArea";
import StoryArea from "./StoryArea";
import RightArea from "./RightArea";

function MainArea() {
  return (
    <div className="Main">
      <RightArea />
      <div className="MainArea">
        <StoryArea />
        <div className="message">
          <FeelArea />
          <PostedArea />
          
        </div>
      </div>

      <LeftArea />
    </div>
  );
}
export default MainArea;
