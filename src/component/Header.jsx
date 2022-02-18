import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../redux/slice/header";
import Main from "./Main";
function Header() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.header.name);
  const handelChangeName = () => {
    let userName = document.querySelector("#inputText").value;
    dispatch(changeName(userName));
  };
  return (
    <div className="App">
      <h2 className={`${name}` ? "Online" : "Offline"}>
        {name ? `${name} Online` : "Offline"}
      </h2>
      <label htmlFor="inputText">
        <input type="text" id="inputText" />
        <button onClick={handelChangeName}>Log in </button>
      </label>
      {name && <Main />}
    </div>
  );
}

export default Header;
