import React from "react";
import pic from "../components/avatar.png";

const Tweet = (props) => {
  return (
    <div class="ui two cards">
      <div class="ui card" style={{ padding: "1em 1em" }}>
        <div class="content">
          <img class="ui avatar image" src={pic} />
          Elliot
          <div class="meta">14h</div>
        </div>
        <div class="description">
          Elyse is a copywriter working in New York.
        </div>
        <div class="image">
          <img src={pic} />
        </div>

        {/* <div class="ui  divided  items ">
        <div class="item">
          <div class="ui tiny image">
            <img src="/images/wireframe/image.png" />
          </div>
          <div class="middle aligned content">Content A</div>
        </div>
        <div class="item">
          <div class="ui tiny image">
            <img src="/images/wireframe/image.png" />
          </div>
          <div class="middle aligned content">Content B</div>
        </div>
        <div class="item">
          <div class="ui tiny image">
            <img src="/images/wireframe/image.png" />
          </div>
          <div class="middle aligned content">Content C</div>
        </div>
      </div> */}

        <div class="ui horizontal segments" style={{ maxInlineSize: "100%" }}>
          <div class="ui segment">
            <i class="comment icon">comment</i>
          </div>
          <div class="ui segment">
            <i class="retweet icon">retweet</i>
          </div>
          <div class="ui segment">
            <i class="heart outline like icon">liked</i>
          </div>
          <div class="ui segment">
            <i class="bookmark outline icon">saved</i>
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
    </div>
  );
};
export default Tweet;
