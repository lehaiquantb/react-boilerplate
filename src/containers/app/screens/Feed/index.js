import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Feed = (props) => {
  const dp = useDispatch();
  React.useEffect(() => {
    dp({
      type: "get_profile",
    });
  }, [dp]);
  return (
    <div>
      <Link to="/">home</Link>
      this is feed page
    </div>
  );
};

export default Feed;
