import React from "react";
import Hashtag from "./Hashtag";

const TrendsHashtag = (props) => {
  return (
    <div class="ui card">
      <div class="ui raised segments">
        <div class="header">Trends for you</div>
        <Hashtag />
        <Hashtag />
      </div>
    </div>
  );
};
export default TrendsHashtag;
