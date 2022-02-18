import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/slice/main";
import { useEffect, useState } from "react";
import Count from "./Count";
function Main() {
  const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.main);
  const [showMore, setShowMore] = useState(false);
  const toggleShow = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="App-header">
      <h2>Users</h2>
      <p>{status}</p>
      <button
        onClick={() => {
          dispatch(getUsers());
        }}
      >
        Get Users
      </button>
      {showMore && <Count />}
      <ul className="App-header">
        {users.map((user, i) => {
          return (
            <p key={i}>
              {user.id} {user.name}
              <button onClick={toggleShow}>
                {" "}
                {showMore ? "Show less" : "Show more"}
              </button>
            </p>
          );
        })}
      </ul>
    </div>
  );
}

export default Main;
