import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Tweet from './Tweet/Tweet'
import TrendsHashtag from "./TrendsHashtag"

function Bookmarks(props) {
    return (
        <div>
            <div style={{
                position: 'absolute', right: '30%', top: '37%',
                transform: 'translate(-50%, -50%)', backgroundColor: '#FFF'
            }}>
                <section class="left-col user-info">
                    <div class="profile-avatar">
                        <div class="inner"></div>
                    </div>
                    {/* <h1>Willabelle Ong</h1>
                <h2>Enthusiast</h2> */}
                    <div class="meta">
                        <ul className="tweets-li">
                            <li><a href="https://twitter.com" title="9.840 Tweet">
                                <span class="twPc-StatLabel twPc-block">Tweets</span>
                            </a></li>
                            <li><a href="https://twitter.com" title="9.840 Tweet">
                                <span class="twPc-StatLabel twPc-block">Tweets & replies</span>
                            </a></li>
                            <li><a href="https://twitter.com" title="9.840 Tweet">
                                <span class="twPc-StatLabel twPc-block">Media</span>
                            </a></li>
                            <li><a href="https://twitter.com" title="9.840 Tweet">
                                <span class="twPc-StatLabel twPc-block">Likes</span>
                            </a></li>
                        </ul>
                    </div>
                </section>
            </div>
            <div style={{
                position: 'absolute', left: '60%', top: '90%',
                transform: 'translate(-50%, -50%)', backgroundColor: '#FFF'
            }}>
                {/* <Mainbar> */}
                {/* <Tweetbar> */}
                <Tweet></Tweet>
                <Tweet></Tweet>
                <Tweet></Tweet>
                {/* </Tweetbar> */}
                {/* </Mainbar> */}
            </div>
        </div>
    )
}

export default Bookmarks;