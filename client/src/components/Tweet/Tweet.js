import React, { useState, useEffect } from "react";
import pic from "./avatar.png";
import tweets from "../../apis/tweets";
import TweetCard from './TweetCard'

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
    <div className="ui three vartical raised cards" >
      {tweetInfo.map((tweet) => {
          if (!tweet) {
            return <div>Loading..</div>;
          } else {
            return (
              <TweetCard
                username={tweet.username}
                createdAt={tweet.createdAt}
                description={tweet.description}
                images={tweet.images}
                key={tweet.name}
              />
            );
          }
        })}
    </div>
  );
};
export default Tweet;
