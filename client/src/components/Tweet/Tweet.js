import React from "react";
import pic from "./avatar.png";

const Tweet = (props) => {
  return (
    <div class="ui card" style={{ width: "600px", height: '300px', padding: '-3px' }}>
      <div class="content">
        <img class="ui avatar image" src={pic} alt="user img" />
          Elliot
          <div class="meta">14h</div>
      </div>
      <div class="description">
        Elyse is a copywriter working in New York.
        </div>
      <div class="image" >
        <img src={pic} alt="tweet img" style={{ width: "450px", height: '100px', padding: '-1px' }} />
      </div>

      <div class="ui horizontal segments" style={{ width: "600px", height: '100px' }}>
        <div class="ui segment" style={{ width: "50px", height: '50px', padding: '5px' }} >
          <i class="comment icon">comment</i>
        </div>
        <div class="ui segment">
          <i class="retweet icon" >retweet</i>
        </div>
        <div class="ui segment">
          <i class="heart outline like icon" >liked</i>
        </div>
        <div class="ui segment">
          <i class="bookmark outline icon" >saved</i>
        </div>
      </div>

      <div class="extra content">
        <div class="ui large transparent left icon input">
          <i>
            <img class="ui avatar image" src={pic} alt="user avatar img" />
          </i>
          <input type="text" placeholder="Add Comment..." />
        </div>
      </div>
    </div>
  );
};
export default Tweet;
