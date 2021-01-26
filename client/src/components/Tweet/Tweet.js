import React from "react";
import pic from "./avatar.png";

const Tweet = (props) => {
  return (
    <div class="ui two cards">
      <div class="ui card" style={{ padding: "1em 1em", width: '100%' }}>
        <div class="content">
          <img class="ui avatar image" src={pic} alt="user img" />
          Elliot
          <div class="meta">14h</div>
        </div>
        <div class="description">
          Elyse is a copywriter working in New York.
        </div>
        <div class="image">
          <img src={pic} alt="tweet img" />
        </div>

        <div class="ui horizontal segments" >
          <div class="ui segment" >
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
    </div>
  );
};
export default Tweet;
