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
    <div class="ui card" style={{ width: "600px", height: '300px', marginBottom: '150px', padding: '1px' }}>
      <div class="content">
        <img class="ui avatar image" src={pic} alt="user img" />
          Elliot
          <div class="meta">14h</div>
      </div>
      <div class="description">
        Elyse is a copywriter working in New York.
        </div>
      <div class="image" >
        <img src="https://i.pinimg.com/236x/53/5d/ed/535ded0607931f18bfc3d823739d4f84.jpg" alt="tweet img" style={{ width: "600px", height: '200px', padding: '10px' }} />
      </div>

      <div class="ui horizontal segments" style={{ color: "#4F4F4F", boxShadow: "#4F4F4F" }}>
        <div class="ui segment"  >
          <a href="#" class="card-link" style={{ color: "#4F4F4F", boxShadow: "#4F4F4F" }}><i class="comment icon"></i>comment</a>
        </div>
        <div class="ui segment">
          <a href="#" class="card-link" style={{ color: "#4F4F4F", boxShadow: "#4F4F4F" }}><i class="retweet icon" ></i>retweet</a>
        </div>
        <div class="ui segment">
          <a href="#" class="card-link" style={{ color: "#4F4F4F", boxShadow: "#4F4F4F" }}><i class="heart outline like icon" ></i>liked</a>
        </div>
        <div class="ui segment">
          <a href="#" class="card-link" style={{ color: "#4F4F4F", boxShadow: "#4F4F4F" }}><i class="bookmark outline icon" ></i>saved</a>
        </div>
      </div>

      <div class="extra content" style={{ width: "600px", height: '30px', padding: '1px' }} >
        <div class="ui large transparent left icon input">
          <i>
            <img class="ui avatar image" src={pic} alt="user avatar img" />
          </i>
          <input type="text" placeholder="Tweet your reply..." />
        </div>
      </div>
    </div>
  );
};
export default Tweet;
