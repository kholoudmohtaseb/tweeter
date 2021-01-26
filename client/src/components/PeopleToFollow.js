import React from "react";
import pic from "../components/avatar.png";

const PeopleToFollow = () => {
  return (
    <div class="ui segment">
      <div class="content">
        <button class="ui right floated primary button">follow</button>
        <img class="ui avatar image" src={pic} />
        Elliot
        <div class="meta">230K followers</div>
      </div>
      <div class="description">Photographer and filmmaker</div>
      <div
        class="ui small rounded centered image"
        style={{ width: "132.94px", height: "153.71px" }}
      >
        <img src={pic} />
      </div>
    </div>
  );
};
export default PeopleToFollow;
