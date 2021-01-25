import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css'
// import '@fortawesome/fontawesome-free/css/all.min.css';

import ReactTwitterFollowButton from 'react-twitter-follow-button';


function UserProfile() {
    return (
        <div className="profile-page">
            <div className="page-header header-filter" >
                <img src="https://images.iphonephotographyschool.com/22682/How-To-Blur-Background-On-iPhone.jpg" alt="Circle Image" className="cover-photo" />
            </div>
            <div className="main main-raised">




                <div className="profile-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 ml-auto mr-auto">


                                <div class="twPc-divUser">
                                    <ul class="twPc-Arrange">

                                        <div class="twPc-divStats">
                                            <div class="twPc-divName">
                                                <a href="https://twitter.com">Name </a>
                                            </div>
                                        </div>
                                        <li class="twPc-ArrangeSizeFit">
                                            <a href="https://twitter.com/mertskaplan/following" title="885 Following">
                                                <span class="twPc-StatValue">885
                                                        <span class="twPc-StatLabel twPc-block">following</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li class="twPc-ArrangeSizeFit">
                                            <a href="https://twitter.com/mertskaplan/followers" title="1.810 Followers">
                                                <span class="twPc-StatValue">1.810
                                                        <span class="twPc-StatLabel twPc-block">followers</span>
                                                </span>
                                            </a>
                                        </li>

                                    </ul>
                                    <div class="twPc-button spacing={1}">
                                        {/* <!-- Twitter Button > */}
                                        <a href="https://twitter.com/mertskaplan" class="twitter-follow-button" data-show-count="false" data-size="large" data-show-screen-name="false" data-dnt="true"><ReactTwitterFollowButton /></a>
                                    </div>

                                </div>
                                <div className="profile">
                                    <div className="avatar">
                                        <img src="https://i.pinimg.com/236x/83/ac/b1/83acb189d0fc48b18d609085661a7ac4.jpg" alt="Circle Image" className="img-raised img-fluid" />
                                        <div className="description">
                                            <p>An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    )
}

export default UserProfile