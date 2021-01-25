import React from "react";
import pic from "../components/avatar.png";

const Tweet = (props) => {
  return (
    <div class="ui card">
      <div class="content">
        <img class="ui avatar image" src={pic} />
        Elliot
        <div class="meta">14h</div>
      </div>
      <div class="description">Elyse is a copywriter working in New York.</div>
      <div class="image">
        <img src={pic} />
      </div>

      <div class="ui horizontal segments">
        <div class="ui segment">
          <i class="comment icon"></i>comment
        </div>
        <div class="ui segment">
          <i class="retweet icon"></i>retweet
        </div>
        <div class="ui segment">
          <i class="heart outline like icon"></i>
          liked
        </div>
        <div class="ui segment">
          <i class="bookmark outline icon"></i>
          saved
        </div>
      </div>

      {/* <div class="center aligned content">
        <span class="right floated">
          <i class="heart outline like icon"></i>
          17 likes
        </span>
        <i class="comment icon"></i>3 comments
      </div> */}

      <div class="extra content">
        <div class="ui large transparent left icon input">
          <i>
            <img class="ui avatar image" src={pic} />
          </i>
          <input type="text" placeholder="Add Comment..." />
        </div>
      </div>
    </div>
  );
};
export default Tweet;
