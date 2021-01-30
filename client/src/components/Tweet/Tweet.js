import React, { useState, useEffect } from "react";
import pic from "./avatar.png";
import tweets from "../../apis/tweets";

const Tweet = (props) => {
  const [tweetInfo, setTweetInfo] = useState([]);

  const fetchTweets = async () => {
    const response = await tweets.get("/gitalltweete/");
    console.log("-------------------", response.data);
    setTweetInfo(response.data);
  };
  useEffect(() => {
    fetchTweets();
  }, []);
  return (
    <div
      class="ui card"
      style={{ width: "600px", height: "300px", padding: "-3px" }}
    >
      <div class="content">
        <img class="ui avatar image" src={pic} alt="user img" />
        {tweetInfo.username}
        <div class="meta">{tweetInfo.createdAt}</div>
      </div>
      <div class="description">{tweetInfo.description}</div>
      <div class="image">
        <img
          src={pic}
          alt="tweet img"
          style={{ width: "450px", height: "100px", padding: "-1px" }}
        />
      </div>

      <div
        class="ui horizontal segments"
        style={{ width: "600px", height: "100px" }}
      >
        <div
          class="ui segment"
          style={{ width: "50px", height: "50px", padding: "5px" }}
        >
          <i class="comment icon">{props.comments}</i>
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
