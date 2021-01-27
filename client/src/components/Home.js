import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Tweet from './Tweet/Tweet'
import TrendsHashtag from "./TrendsHashtag"
import WhoToFollow from "./WhoToFollow"

function Home(props) {
    return (
        <div>
            <div style={{
                position: 'absolute', left: '80%', top: '30%',
                transform: 'translate(-50%, -50%)', backgroundColor: '#FFF'
            }}>
                <TrendsHashtag />
            </div>
            <div style={{
                position: 'absolute', left: '80%', top: '95%',
                transform: 'translate(-50%, -50%)', backgroundColor: '#FFF'
            }}>
                <WhoToFollow />
            </div>
            <div style={{
                position: 'absolute', left: '40%', top: '90%',
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

export default Home;