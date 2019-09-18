import React from "react";
import s from "./Post.module.scss";

const Post = (props) => {
  // debugger;
  return (
    <div className={s.item}>
      <img
        src={require("../../../../img/avatar/avatar_1.jpg")}
        alt="Avatar_1"
      />
      {props.message}
      <div>
        <span>Like </span>
        {props.likes}
      </div>
    </div>
  );
};

export default Post;
