import React from "react";
import PeopleToFollow from "./PeopleToFollow";

const WhoToFollow = (props) => {
  return (
    <div
      class="ui card"
      style={{
        background: "#FFFFFF",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
        borderRadius: "12px",
      }}
    >
      <div class="ui raised segments">
        <div
          class="header"
          style={{
            fontFamily: "Poppins",
            fontSize: "12px",
            lineHeight: "18px",
            fontWeight: "600",
          }}
        >
          Who to follow
        </div>
        <PeopleToFollow />
        <PeopleToFollow />
      </div>
    </div>
  );
};
export default WhoToFollow;
