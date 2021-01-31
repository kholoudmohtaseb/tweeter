import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from '../Data';

function Follow() {
    return (
        <div>
            <h1>name</h1>
            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <h1>name</h1>
                        {/* {Object.keys(Data.member1).map((key) => (
                            <div className='members'>
                                {Data.member1[key].name}
                                { Data.member.followNo}follower
                                { Data.member.description}
                                < a href={Data.member.link} >
                                    {Data.member.icon}
                                </a>
                            </div>
                        ))} */}
                        {/* <div className="member-info">
                            <span >{Data.members.member1}</span>
                        </div> */}
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Follow
