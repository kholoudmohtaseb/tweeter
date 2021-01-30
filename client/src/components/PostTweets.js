import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';


function PostTweets() {
    return (
        <div style={{ width: "605px", height: '50px', padding: '5px' }}>
            <div className="card gedf-card">
                <div className="card-header">
                    {/* <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist"> */}
                    {/* <li className="nav-item"> */}
                    <a className="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">
                        Tweet something
                                    </a>
                    {/* </li> */}

                    {/* </ul> */}
                </div>
                <div className="card-body">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                            <div className="form-group">
                                <label className="sr-only" for="message">post</label>
                                <textarea className="form-control" id="message" rows="3" placeholder="What's happening?"></textarea>
                            </div>

                        </div>
                        <div className="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
                            <div className="form-group">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="customFile" />
                                    <label className="custom-file-label" for="customFile">Upload image</label>
                                </div>
                            </div>

                            <div className="py-4"></div>
                        </div>
                    </div>
                    <div className="btn-toolbar justify-content-between">

                        <div className="btn-group">
                            <button type="button" className="btn btn-link" aria-haspopup="true"
                                aria-expanded="false">
                                <ImageOutlinedIcon type="file" className="custom-file-label" id="customFile" for="customFile" />
                            </button>

                            <button id="btnGroupDrop1" type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i className="fa fa-globe">Everyone can reply</i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                                <a className="dropdown-item" href="#"><GroupOutlinedIcon /></a>
                                <a className="dropdown-item" href="#"><PublicOutlinedIcon /></a>
                                {/* <a className="dropdown-item" href="#"><i className="fa fa-user"></i> Just me</a> */}
                            </div>
                        </div>

                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary">Tweet</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostTweets;
