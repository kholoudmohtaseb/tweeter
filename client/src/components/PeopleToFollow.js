import React from "react";
import pic from "../components/avatar.png";

const PeopleToFollow = () => {
  return (
    <div class="ui segment">
      <div class="content">
        <button class="ui right floated primary active button">
          <i class="user icon"></i>
          follow
        </button>
        {/* <button class="ui right floated primary button">follow</button> */}
        <img class="ui avatar image" src={pic} />
        Elliot
        <div class="meta">230K followers</div>
      </div>
      <div class="description">Photographer and filmmaker</div>
      <div
        class="fluid ui  rounded  image"
        // style={{ height: "16 / 9" }}
      >
        <img src="https://s3-alpha-sig.figma.com/img/0986/1118/8fe435ad0260081f0b3dcc77f46ffe82?Expires=1612742400&Signature=LSVD422XjSa~gRdaP~GOmYT18XP2qjBLgdydVvxd0UkKbANrnPewlbD3zCSsee4OP4FmVIitJ3CUYFmJjbPJ1Hj8jX4tmszHnuSrkmD07vq7~iiG0uxaxhcsvH-a9obUTOtxYv8aNESiJ7tL1XrWUukN~NU2TKEQ8gzIL8twt8A1hfERkZElFTMZ~KZaIcj2r~4nOeWUOHzOyUVn6uOE5~eii4nYT4RSl46e1ohgHKs0~~bhtea4vl2bXYOlhm41bdi2~V4XQXkiyt9JFIF6jKXsFBaYGNxyswFcLU862Z~sabwg6NajGv7NdW39EVk8VvngsnyZU5Hd97p1zp1DGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
      </div>
    </div>
  );
};
export default PeopleToFollow;
